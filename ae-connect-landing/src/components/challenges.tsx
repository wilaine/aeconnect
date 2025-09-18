"use client"

import { motion } from "framer-motion"
import { TrendingDown, Timer, GitMerge, Zap, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

const iconMap = {
  TrendingDown,
  Timer,
  GitMerge,
  Zap,
  Users,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Challenges() {
  return (
    <section id="challenges" className="py-24 bg-slate-50">
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
                02 — What We Fix
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Your Business Challenges,{" "}
                <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                  Our Expertise
                </span>
              </h2>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
            >
              Our customers once faced overwhelming challenges in pipeline generation, struggling to secure 
              high-quality leads and maintain steady business growth. These hurdles seemed impossible—until 
              we stepped in with strategic solutions and proven expertise.
            </motion.p>
          </div>

          {/* Challenges Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {siteConfig.challenges.slice(0, 3).map((challenge, index) => {
              const Icon = iconMap[challenge.icon as keyof typeof iconMap]
              return (
                <motion.div key={challenge.title} variants={itemVariants}>
                  <Card className="h-full bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 mb-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">
                        {challenge.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {challenge.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Additional Challenges Row */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {siteConfig.challenges.slice(3).map((challenge, index) => {
              const Icon = iconMap[challenge.icon as keyof typeof iconMap]
              return (
                <motion.div key={challenge.title} variants={itemVariants}>
                  <Card className="h-full bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 mb-4 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">
                        {challenge.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {challenge.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Solution CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-br from-sky-500 to-indigo-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Overcome These Challenges?
            </h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              We've helped transform stagnant pipelines into thriving networks of engaged prospects. 
              Let's overcome these struggles together.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
              <span className="text-lg font-semibold">Next: See What Our Clients Say</span>
              <span className="text-2xl">👇</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}