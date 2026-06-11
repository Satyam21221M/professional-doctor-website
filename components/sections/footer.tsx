import { Phone, Mail } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  const { doctorName, specialty, logoInitials, footer, phone, email } = siteConfig

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-heading text-sm font-bold text-primary-foreground">
            {logoInitials}
          </span>
          <div>
            <p className="font-heading text-base font-bold text-foreground">{doctorName}</p>
            <p className="text-xs text-muted-foreground">{specialty}</p>
          </div>
        </div>

        <p className="max-w-sm text-center text-sm text-muted-foreground md:text-left">
          {footer.note}
        </p>

        <div className="flex flex-col items-center gap-2 text-sm md:items-end">
          <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
            <Phone className="size-4" />
            {phone}
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
            <Mail className="size-4" />
            {email}
          </a>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="text-center text-xs text-muted-foreground">
          {`© ${new Date().getFullYear()} ${doctorName}. All rights reserved.`}
        </p>
        <p className="mt-1 text-center text-xs text-muted-foreground">
          Created by Satyam.C
        </p>
      </div>
    </footer>
  )
}
