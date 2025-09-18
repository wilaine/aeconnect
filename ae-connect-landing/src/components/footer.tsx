"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 border-b border-slate-700"
        >
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Still have questions?
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Don't let revenue growth barriers hold you back. 
              Let's discuss how we can accelerate your sales pipeline.
            </p>
            <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600">
              <Link href={siteConfig.links.email} className="inline-flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </Link>
              <p className="text-slate-300 max-w-sm">
                Your B2B Sales Partner. Unlock more sales opportunities on demand 
                with strategic, results-driven approach.
              </p>
              <div className="space-y-2 text-sm text-slate-400">
                <div>Registration: {siteConfig.company.registrationId}</div>
                <div>{siteConfig.company.businessHub}</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {siteConfig.navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Get in Touch</h4>
              <div className="space-y-2">
                <Link
                  href={siteConfig.links.email}
                  className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{siteConfig.email}</span>
                </Link>
              </div>
              <div className="pt-4">
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ready to accelerate your sales growth? 
                  We respond to all inquiries within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {siteConfig.company.year} {siteConfig.company.name}. All rights reserved.
            </div>
            
            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white hover:bg-slate-800 group"
            >
              <span className="text-sm mr-2">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}