import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { CountUp } from "@/components/count-up"

export function Stats() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {siteConfig.stats.map((stat, i) => (
          <Reveal key={stat.label} direction="up" delay={i * 100} className="text-center">
            <p className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl">
              <CountUp end={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-primary-foreground/80">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
