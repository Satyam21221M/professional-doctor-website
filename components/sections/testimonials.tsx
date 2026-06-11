import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function Testimonials() {
  const { testimonials } = siteConfig

  return (
    <section id="testimonials" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            {testimonials.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{testimonials.subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal
              key={t.name}
              direction="up"
              delay={i * 120}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <Quote className="size-8 text-primary/30" />
              <div className="mt-3 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-foreground">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
