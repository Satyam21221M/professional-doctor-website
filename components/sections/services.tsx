import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function Services() {
  const { services } = siteConfig

  return (
    <section id="services" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            What we offer
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            {services.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{services.subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.title}
                direction="up"
                delay={(i % 3) * 100}
                className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{service.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
