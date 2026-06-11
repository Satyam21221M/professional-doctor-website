"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right" | "scale"

const hiddenStyles: Record<Direction, string> = {
  up: "translate-y-12 opacity-0",
  down: "-translate-y-12 opacity-0",
  left: "translate-x-12 opacity-0",
  right: "-translate-x-12 opacity-0",
  scale: "scale-95 opacity-0",
}

type RevealProps = {
  children: ReactNode
  className?: string
  /** direction the element travels in from */
  direction?: Direction
  /** delay in ms before the element settles */
  delay?: number
  /** render as a specific element tag */
  as?: "div" | "section" | "li" | "article"
}

/**
 * Reveal — wraps any content and animates it into place when it
 * scrolls into view. Elements start offset/faded and "settle" once
 * visible. Reusable across every section of the site.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none",
        visible ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hiddenStyles[direction],
        className,
      )}
    >
      {children}
    </Tag>
  )
}
