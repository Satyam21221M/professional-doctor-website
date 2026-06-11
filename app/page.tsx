import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Experience } from "@/components/sections/experience"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
