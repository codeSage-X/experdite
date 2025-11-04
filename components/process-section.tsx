"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

const STEPS = [
  {
    id: 1,
    title: "Connect With Us",
    description:
      "Fill out a short form and a real person, not a bot, will reach out to understand your goals and preferences.",
  },
  {
    id: 2,
    title: "Get Matched & Prepped",
    description:
      "We find the perfect assignment for you and prepare all necessary documentation and support materials.",
  },
  {
    id: 3,
    title: "Start Your Assignment",
    description: "Begin your locum tenens journey with comprehensive support throughout your assignment.",
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-yellow-50 py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-6 sm:gap-0 mb-12 sm:mb-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 font-outfit">
              We&apos;ve made the process simple. Here&apos;s how it works
            </h2>
          </div>

          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0">
            <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>

        <div className="mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-black leading-relaxed max-w-2xl font-satoshi">
            {STEPS[activeStep].description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4">
          {STEPS.map((step, index) => {
            const isActive = index === activeStep
            const isPast = index < activeStep

            return (
              <div key={step.id} className="flex-1 w-full flex flex-col items-start sm:items-start">
                {/* Progress line and dots */}
                <div className="w-full flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {/* Step indicator */}
                  <div
                    className={`flex-shrink-0 transition-all duration-500 rounded-full ${
                      isActive
                        ? "bg-black w-5 h-5 sm:w-6 sm:h-6"
                        : isPast
                          ? "bg-gray-400 w-3 h-3 sm:w-4 sm:h-4"
                          : "bg-gray-300 w-3 h-3 sm:w-4 sm:h-4"
                    }`}
                  ></div>

                  {/* Connecting line */}
                  {index < STEPS.length - 1 && (
                    <div
                      className={`hidden sm:block flex-1 h-1 transition-all duration-500 ${isPast ? "bg-black" : "bg-gray-300"}`}
                    ></div>
                  )}
                </div>

                {/* Step title */}
                <p
                  className={`text-sm sm:text-lg font-satoshi transition-all duration-500 ${
                    isActive ? "text-black font-semibold" : "text-gray-400"
                  }`}
                >
                  {step.id}. {step.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
