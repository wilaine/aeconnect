"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = siteConfig.testimonials

  useEffect(() => {
    if (!isAutoPlaying) return
    const id = setInterval(() => setCurrentIndex((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [isAutoPlaying, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }
  const goToNext = () => {
    setCurrentIndex((p) => (p + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }
  const goToSlide = (i: number) => {
    setCurrentIndex(i)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-slate-700/30 opacity-50" />
      <div className="relative container max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <Badge
              variant="secondary"
              className="px-4 py-2 font-medium"
              style={{ backgroundColor: "rgba(217, 8, 60, 0.2)", color: "#eb5e55", borderColor: "rgba(217, 8, 60, 0.3)" }}
            >
              03 — What Our Clients Say
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Our clients trust us to deliver{" "}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #d9083c, #eb5e55)" }}>
                excellence
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Driving growth, streamlining processes, and delivering real outcomes. Here’s what our clients have to say.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <Card className="border border-slate-700/60 shadow-2xl bg-slate-900/60 backdrop-blur-md">
                  <CardContent className="p-8 md:p-12 text-center">
                    <Quote className="w-12 h-12 mx-auto mb-6" style={{ color: "#eb5e55" }} />
                    <blockquote className="text-lg md:text-xl leading-relaxed text-slate-200 mb-8 font-medium">
                      “{testimonials[currentIndex].quote}”
                    </blockquote>
                    <div className="space-y-2">
                      <div className="font-semibold text-white text-lg">{testimonials[currentIndex].author}</div>
                      <div className="text-slate-400">{testimonials[currentIndex].company}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Nav Buttons & Dots */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      i === currentIndex
                        ? "bg-white w-8"
                        : "bg-slate-500/50 hover:bg-slate-400 w-2"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Autoplay toggle */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
              >
                {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"} auto-rotation
              </button>
            </div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#eb5e55" }}>15+</div>
              <div className="text-lg font-semibold text-white mb-1">Happy Clients</div>
              <div className="text-slate-400">Across multiple industries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-lg font-semibold text-white mb-1">Success Rate</div>
              <div className="text-slate-400">Delivered on time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-lg font-semibold text-white mb-1">Client Satisfaction</div>
              <div className="text-slate-400">Would work with us again</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
