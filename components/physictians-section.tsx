"use client"

import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { EmblaCarouselType } from "embla-carousel"

interface Location {
  id: number
  name: string
  description: string
}

const locations: Location[] = [
  {
    id: 1,
    name: "North Central Florida",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
  {
    id: 2,
    name: "Central Texas",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
  {
    id: 3,
    name: "North California",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
  {
    id: 4,
    name: "Arizona",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
  // Duplicate for infinite scroll effect
  {
    id: 5,
    name: "North Central Florida",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
  {
    id: 6,
    name: "Central Texas",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
  {
    id: 7,
    name: "North California",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
  {
    id: 8,
    name: "Arizona",
    description: "Expedite did this and that and helped with this and that, the process was smooth and stressless",
  },
]

export function PhysiciansSection() {
  const [api, setApi] = useState<EmblaCarouselType | undefined>()

  useEffect(() => {
    if (!api) return

    const handleSelect = () => {
      // Auto-loop effect
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  return (
    <section className="w-full bg-[#121212] py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header with Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-4 mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-outfit max-w-3xl xl:max-w-5xl text-balance leading-tight">
            The physicians who have worked with us loved these <span className="text-[#F6E58B]">locations</span>.
          </h2>

          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => api?.scrollPrev()}
              className="p-2 sm:p-3 text-[#F6E58B] hover:text-yellow-400 transition-colors rounded"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="p-2 sm:p-3 text-[#F6E58B] hover:text-yellow-400 transition-colors rounded"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
              {locations.map((location) => (
                <CarouselItem
                  key={location.id}
                  className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <div className="bg-[#1f1f1f]  rounded-2xl p-6 sm:p-8 h-full min-h-48 sm:min-h-56 flex flex-col justify-between hover:border-yellow-400 transition-colors duration-300">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-outfit">
                        {location.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-satoshi">
                        {location.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
