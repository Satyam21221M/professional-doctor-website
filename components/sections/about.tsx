import Image from "next/image"
import { Check } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function About() {
  const { about } = siteConfig

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="right" className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src={about.image || "/placeholder.svg"}
              alt="Our practice"
              width={720}
              height={560}
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal direction="up">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Get to know us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
              {about.heading}
            </h2>
          </Reveal>

          {about.paragraphs.map((p, i) => (
            <Reveal key={i} direction="up" delay={100 + i * 100}>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}

          <ul className="mt-8 space-y-3">
            {about.highlights.map((item, i) => (
              <Reveal key={item} as="li" direction="left" delay={i * 100} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-4" />
                </span>
                <span className="text-foreground">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
