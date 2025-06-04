"use client"

import Link from "next/link"
import Image from "next/image"

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-6 text-sm">
            <Link href="/" className="text-gray-800 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/gifts" className="text-gray-800 hover:text-black transition-colors">
              Gifts
            </Link>
            <Link href="/photos" className="text-black font-medium border-b-2 border-[#e6c96a] pb-1">
              Roda in Pictures
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section with Scrolling Text */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2-6-2025_151144_rodaisgolden.squarespace.com-7D2jvavZPBzZKdm9QMTqCMxSbrnC0v.jpeg"
            alt="Roda's celebration"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 w-full">
          <div className="animate-scroll whitespace-nowrap text-white text-2xl md:text-3xl font-serif">
            Roda in Pictures | Roda in Pictures | Roda in Pictures | Roda in Pictures | Roda in Pictures | Roda in
            Pictures | Roda in Pictures | Roda in Pictures |
          </div>
        </div>
      </section>

      {/* Photo Galleries */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* 90s Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Roda in the 90s..</h2>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8e5?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 90s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 90s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 90s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 90s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 90s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 90s"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* 2000s Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Roda in the 2000s..</h2>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2000s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2000s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2000s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2000s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2000s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2000s"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* 2010s Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Roda in the 2010s..</h2>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2010s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2010s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2010s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2010s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2010s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2010s"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* 2020s Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">Roda in the 2020s..</h2>
            <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2020s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2020s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2020s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2020s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2020s"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500&h=500&auto=format&fit=crop"
                  alt="Roda in the 2020s"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

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
