"use client"

import { motion } from "framer-motion"
import { TrendingDown, Timer, GitMerge, Zap, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

const iconMap = { TrendingDown, Timer, GitMerge, Zap, Users }

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function Challenges() {
  return (
    <section id="challenges" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-slate-700/30 opacity-50" />
      <div className="relative container max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.div variants={item}>
              <Badge
                variant="secondary"
                className="px-4 py-2 font-medium"
                style={{ backgroundColor: "rgba(217, 8, 60, 0.2)", color: "#eb5e55", borderColor: "rgba(217, 8, 60, 0.3)" }}
              >
                02 — What We Fix
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Your Business Challenges,{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #d9083c, #eb5e55)" }}>
                  Our Expertise
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={item}
              className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            >
              We help businesses break through lead generation bottlenecks and consistently grow high-quality pipelines.
              By combining strategy with repeatable processes, we turn “impossible” into a scalable growth system.
            </motion.p>

          </div>

        {/* Challenges Grid */}
          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.challenges.slice(0, 3).map((c) => {
              const Icon = iconMap[c.icon as keyof typeof iconMap]
              return (
                <motion.div key={c.title} variants={item}>
                  <Card className="h-full border border-slate-700/60 bg-slate-800/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div
                        className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ background: "linear-gradient(to br, rgba(217,8,60,0.15), rgba(235,94,85,0.15))" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "#eb5e55" }} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-white">{c.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300 leading-relaxed">
                        {c.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Row */}
          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {siteConfig.challenges.slice(3).map((c) => {
              const Icon = iconMap[c.icon as keyof typeof iconMap]
              return (
                <motion.div key={c.title} variants={item}>
                  <Card className="h-full border border-slate-700/60 bg-slate-800/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div
                        className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ background: "linear-gradient(to br, rgba(217,8,60,0.15), rgba(235,94,85,0.15))" }}
                      >
                        <Icon className="w-6 h-6" style={{ color: "#eb5e55" }} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-white">{c.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300 leading-relaxed">
                        {c.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="text-center rounded-3xl p-8 md:p-12 border border-slate-700/60 bg-slate-900/60 backdrop-blur-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Overcome These Challenges?</h3>
            <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto">
              We've transformed stagnant lead flow into a predictable growth engine. Next: see what our clients say ↓
            </p>
            <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3"
                 style={{ backgroundColor: "rgba(217, 8, 60, 0.18)", border: "1px solid rgba(217, 8, 60, 0.3)" }}>
              <span className="text-lg font-semibold" style={{ color: "#eb5e55" }}>Next: Testimonials</span>
              <span className="text-2xl">👇</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
