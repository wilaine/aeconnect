"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      isScrolled 
        ? "bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-slate-700" 
        : "bg-slate-900 border-slate-700"
    )}>
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-rose-400"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild size="sm" className="hidden md:inline-flex bg-rose-500 hover:bg-rose-600 text-white">
            <Link href={siteConfig.links.email}>Contact</Link>
          </Button>
          <Button asChild size="sm" variant="outline" className="hidden md:inline-flex border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white">
            <Link href="#contact">Book a Call</Link>
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-slate-200"
        >
          <div className="container px-4 py-4 space-y-4">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-slate-600 hover:text-slate-900"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
              <Button asChild size="sm" onClick={() => setIsOpen(false)}>
                <Link href={siteConfig.links.email}>Contact</Link>
              </Button>
              <Button asChild size="sm" variant="outline" onClick={() => setIsOpen(false)}>
                <Link href="#contact">Book a Call</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}