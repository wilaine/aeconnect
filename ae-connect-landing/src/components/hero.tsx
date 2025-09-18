"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-700/30 opacity-50" />
      
      <div className="relative container max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-rose-500/20 text-rose-300 border-rose-500/30">
              🚀 Your B2B Sales Partner
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              <span className="block">Unlock More</span>
              <span className="block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Sales Opportunities
              </span>
              <span className="block">on Demand</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We deliver <strong>3X faster results</strong> at a fraction of the cost of an in-house team. 
            With strategic, hyper-personalized engagement, we connect you to decision-makers instantly.
          </motion.p>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-medium"
          >
            <div className="flex items-center space-x-2 bg-slate-800/80 backdrop-blur px-4 py-2 rounded-full border border-slate-600">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="text-slate-300">Zero Overhead</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/80 backdrop-blur px-4 py-2 rounded-full border border-slate-600">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="text-slate-300">Zero Delays</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/80 backdrop-blur px-4 py-2 rounded-full border border-slate-600">
              <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
              <span className="text-slate-300">Rapid Growth</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto bg-rose-500 hover:bg-rose-600 text-white">
              <Link href="#contact" className="flex items-center space-x-2">
                <span>Book a Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
              <Link href={siteConfig.links.email}>Email Us</Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-16"
          >
            <Link 
              href="#about"
              className="inline-flex flex-col items-center space-y-2 text-slate-400 hover:text-rose-400 transition-colors"
            >
              <span className="text-sm font-medium">Explore More</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}