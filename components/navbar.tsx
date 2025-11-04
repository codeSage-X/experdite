"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-gradient-to-b from-blue-300 to-transparent fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl sm:text-3xl font-bold flex-shrink-0">
          <span className="text-yellow-600">⬚</span>
          <span className="text-yellow-600">⬚</span>
          <span className="text-gray-800 ml-1 sm:ml-2 font-outfit">ExperditieMD</span>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex items-center justify-center w-10 h-10">
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-12">
          <Link
            href="#process"
            className="text-white text-sm lg:text-lg font-light font-satoshi hover:text-yellow-100 transition"
          >
            Our Process
          </Link>
          <Link
            href="#why-us"
            className="text-white text-sm lg:text-lg font-light font-satoshi hover:text-yellow-100 transition"
          >
            Why Choose Us
          </Link>
          <Link
            href="#about"
            className="text-white text-sm lg:text-lg font-light font-satoshi hover:text-yellow-100 transition"
          >
            About Us
          </Link>

          {/* Contact Button */}
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold flex items-center gap-2 transition font-outfit text-sm lg:text-base">
            <Phone className="w-4 lg:w-5 h-4 lg:h-5" />
            Contact Us
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-blue-300 md:hidden flex flex-col gap-4 p-4">
            <Link href="#process" className="text-white font-satoshi hover:text-yellow-100 transition">
              Our Process
            </Link>
            <Link href="#why-us" className="text-white font-satoshi hover:text-yellow-100 transition">
              Why Choose Us
            </Link>
            <Link href="#about" className="text-white font-satoshi hover:text-yellow-100 transition">
              About Us
            </Link>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition font-outfit w-full justify-center">
              <Phone className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
