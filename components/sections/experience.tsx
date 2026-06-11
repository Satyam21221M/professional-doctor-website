import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function Experience() {
  const { timeline } = siteConfig

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Background
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            {timeline.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{timeline.subheading}</p>
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-0">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-0.5 bg-border sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {timeline.items.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <Reveal
                  key={item.title}
                  direction={isLeft ? "right" : "left"}
                  delay={50}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-8"
                >
                  {/* dot */}
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-1/2 sm:-translate-x-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>

                  <div
                    className={
                      isLeft
                        ? "sm:col-start-1 sm:pr-10 sm:text-right"
                        : "sm:col-start-2 sm:pl-10"
                    }
                  >
                    <span className="text-sm font-semibold text-primary">{item.period}</span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground/70">{item.place}</p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
