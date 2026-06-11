"use client"

import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 shadow-sm backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-heading text-sm font-bold text-primary-foreground">
            {siteConfig.logoInitials}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-bold text-foreground">
              {siteConfig.doctorName}
            </span>
            <span className="text-xs text-muted-foreground">{siteConfig.specialty}</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a href="#contact" className={cn(buttonVariants({ size: "lg" }), "h-10 px-5")}>
            <Phone className="size-4" />
            Book Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={cn(buttonVariants({ size: "lg" }), "mt-2 h-10")}
          >
            <Phone className="size-4" />
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}
