import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Challenges } from "@/components/challenges"
import { Testimonials } from "@/components/testimonials"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Challenges />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
