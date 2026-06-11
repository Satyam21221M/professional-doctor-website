import Image from "next/image"
import { Phone, ArrowRight, ShieldCheck } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  const { hero, credentials, doctorName } = siteConfig

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 to-background pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* soft decorative accents */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="text-center lg:text-left">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <ShieldCheck className="size-4" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              {hero.heading}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
              {hero.subheading}
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={hero.primaryCta.href}
                className={cn(buttonVariants({ size: "lg" }), "h-12 w-full px-7 text-base sm:w-auto")}
              >
                <Phone className="size-4" />
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full px-7 text-base sm:w-auto",
                )}
              >
                {hero.secondaryCta.label}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-primary/10">
            <Image
              src={hero.image || "/placeholder.svg"}
              alt={`Portrait of ${doctorName}`}
              width={640}
              height={760}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          {/* floating credential card */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl lg:left-6 lg:translate-x-0">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ShieldCheck className="size-5" />
            </span>
            <div className="text-left">
              <p className="font-heading text-sm font-bold text-foreground">{doctorName}</p>
              <p className="text-xs text-muted-foreground">{credentials}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
