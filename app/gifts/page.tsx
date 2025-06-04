"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GiftsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-800 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/gifts" className="text-black font-medium border-b-2 border-[#e6c96a] pb-1">
              Gifts
            </Link>
            <Link href="#photos" className="text-gray-800 hover:text-black transition-colors">
              Roda in Pictures
            </Link>
          </nav>
        </div>
      </header>

      {/* Gifts Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-4xl font-serif text-gray-800 mb-12">A note on gifts..</h1>

            <div className="space-y-6 text-gray-700">
              <p className="italic text-lg leading-relaxed">
                "If you know me well, surprise me with something you know I'll love—your thoughtful touch means the
                world.
              </p>
              <p className="italic text-lg leading-relaxed">
                If you're not sure what to get, feel free to contribute to the gift fund below and I'll treat myself to
                something special.
              </p>
              <p className="italic text-lg leading-relaxed">Thank you so much for being part of this milestone!"</p>
            </div>

            <p className="font-semibold text-xl text-gray-800 mt-8">Roda</p>

            <div className="mt-12">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">Gift Fund</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative">
        <svg
          className="w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#f5f5f0"
          />
        </svg>
      </div>

      {/* Large Image Section */}
      <section className="relative h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1516914589923-f105f1535f88?q=80&w=2070&auto=format&fit=crop"
          alt="Roda"
          fill
          className="object-cover"
        />
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                Get in touch:{" "}
                <a href="mailto:roda@example.com" className="text-[#e6c96a]">
                  roda@example.com
                </a>
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-xs mt-2">Website designed and managed by</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
