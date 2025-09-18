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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="mb-4">
                01 — What We Do
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Tailored Outreach,{" "}
                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  Maximum Impact
                </span>
              </h2>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              We deliver <strong>3X faster results</strong> at a fraction of the cost of an in-house team. 
              With strategic, hyper-personalized engagement, we connect you to decision-makers instantly—driving 
              rapid growth with <strong>zero overhead, zero delays</strong>.
            </motion.p>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {siteConfig.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap]
              return (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-sky-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Results Section */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-sky-600 mb-2">3X</div>
                <div className="text-lg font-semibold mb-1">Faster Results</div>
                <div className="text-slate-500">Than in-house teams</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">Zero</div>
                <div className="text-lg font-semibold mb-1">Overhead</div>
                <div className="text-slate-500">No hiring or training costs</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">Instant</div>
                <div className="text-lg font-semibold mb-1">Connection</div>
                <div className="text-slate-500">To decision-makers</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}