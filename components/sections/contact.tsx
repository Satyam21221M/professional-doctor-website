import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/reveal"

export function Contact() {
  const { contact } = siteConfig

  const infoItems = [
    { icon: MapPin, label: "Address", value: contact.address, href: undefined },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/[^\d+]/g, "")}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  ]

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Get in touch
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{contact.subheading}</p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            {infoItems.map((item, i) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-foreground">{item.label}</p>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              )
              return (
                <Reveal key={item.label} direction="right" delay={i * 100}>
                  {item.href ? (
                    <a href={item.href} className="block">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              )
            })}

            <Reveal direction="right" delay={300}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div className="w-full">
                  <p className="font-heading text-sm font-bold text-foreground">Office Hours</p>
                  <ul className="mt-2 space-y-1.5">
                    {contact.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4 text-sm">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-medium text-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={150} className="min-h-80">
            <div className="h-full overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Practice location"
                src={contact.mapEmbedUrl}
                className="h-full min-h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
