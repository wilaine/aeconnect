"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Calendar, ArrowRight, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-12"
        >
          {/* Main CTA Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white/80 text-sm">
              <Rocket className="w-4 h-4" />
              <span>Ready to accelerate your growth?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ambitious goals deserve{" "}
              <span style={{background: 'linear-gradient(to right, #d9083c, #eb5e55)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                bold execution
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Let's join forces to create something game-changing. 
              Connect with us now and ignite the next big success!
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/15 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, rgba(217, 8, 60, 0.9), rgba(235, 94, 85, 0.9))'}}>
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Email Us</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Drop us a line and we'll get back to you within 24 hours with a tailored solution.
                  </p>
                  <Button asChild size="lg" className="w-full bg-white text-slate-900 hover:bg-slate-100">
                    <Link href={`mailto:${siteConfig.email}?subject=Interested in Your Services&body=Hi AE Connect,%0D%0AI'm interested in your services—can we set up a quick call?`} className="flex items-center justify-center space-x-2">
                      <span>{siteConfig.email}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-sky-500 to-indigo-600 border-0 hover:from-sky-400 hover:to-indigo-500 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Book a Call</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Schedule a 30-minute strategy session to discuss your specific needs and goals.
                  </p>
                  <Button asChild size="lg" variant="secondary" className="w-full bg-white text-slate-900 hover:bg-slate-100">
                    <Link href="https://calendly.com/elaine-aeconnect/discussion" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                      <span>Schedule Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>No Long-term Contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>24h Response Time</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}