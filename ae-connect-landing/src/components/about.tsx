"use client"

import { motion } from "framer-motion"
import { Calendar, Target, Handshake } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

const iconMap = { 
  Calendar,
  Target, 
  Handshake, 
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15 
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }, 
  },
}

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-slate-700/30 opacity-50" />
      <div className="relative container max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.div variants={item}>
              <Badge
                variant="secondary"
                className="px-4 py-2 font-medium"
                style={{ backgroundColor: "rgba(217, 8, 60, 0.2)", color: "#eb5e55", borderColor: "rgba(217, 8, 60, 0.3)" }}
              >
                01 — What We Do
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Tailored Outreach,{" "}
                <span
                  style={{
                    background: "linear-gradient(to right, #d9083c, #eb5e55)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Maximum Impact
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={item}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              我们以<strong>3X 更快</strong>的节奏交付成果，并显著低于自建团队成本。
              通过策略化、超个性化的触达，直接连到决策者，推动增长——
              <strong>零管理成本，零等待</strong>。
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <motion.div key={service.title} variants={item}>
                  <Card className="h-full border border-slate-700/60 bg-slate-800/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                           style={{ background: "linear-gradient(to br, rgba(217,8,60,0.15), rgba(235,94,85,0.15))" }}>
                        <Icon className="w-8 h-8" style={{ color: "#eb5e55" }} />
                      </div>
                      <CardTitle className="text-xl font-semibold text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base leading-relaxed text-slate-300">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Results / KPIs */}
          <motion.div
            variants={item}
            className="rounded-3xl p-8 md:p-12 border border-slate-700/60 bg-slate-900/60 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#eb5e55" }}>3X</div>
                <div className="text-lg font-semibold text-white mb-1">Faster Results</div>
                <div className="text-slate-400">Than in-house teams</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">Zero</div>
                <div className="text-lg font-semibold text-white mb-1">Overhead</div>
                <div className="text-slate-400">No hiring or training costs</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">Instant</div>
                <div className="text-lg font-semibold text-white mb-1">Connection</div>
                <div className="text-slate-400">To decision-makers</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
