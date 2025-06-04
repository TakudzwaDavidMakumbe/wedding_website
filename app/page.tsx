"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [attendance, setAttendance] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleRSVP = async (e: FormEvent) => {
    e.preventDefault()

    if (!firstName || !lastName || !email || !attendance) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "RSVP Submitted",
        description: "Thank you for your response!",
      })
      setFirstName("")
      setLastName("")
      setEmail("")
      setAttendance("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <nav className="flex items-center space-x-6 text-sm">
            <Link href="/" className="text-black font-medium border-b-2 border-[#e6c96a] pb-1">
              Home
            </Link>
            <Link href="/gifts" className="text-gray-800 hover:text-black transition-colors">
              Gifts
            </Link>
            <Link href="/photos" className="text-gray-800 hover:text-black transition-colors">
              Roda in Pictures
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2-6-2025_151144_rodaisgolden.squarespace.com-7D2jvavZPBzZKdm9QMTqCMxSbrnC0v.jpeg"
            alt="Roda's celebration"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl px-4">
          <h1 className="text-3xl md:text-4xl font-serif mb-4">Join us as we celebrate a truly special milestone:</h1>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Roda is turning 50!</h2>
          <p className="text-lg md:text-xl">
            We're planning an unforgettable evening of laughter, love, and celebration, and we'd be honored to have you
            there.
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative">
        <svg
          className="w-full h-24 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f5f5f0" />
              <stop offset="50%" stopColor="#f0f0e8" />
              <stop offset="100%" stopColor="#e6c96a" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradient)"
            opacity="0.9"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#e6c96a"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Invitation Details */}
      <section className="cream-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-[#e6c96a] mb-12">You're Invited!</h2>

          <div className="max-w-2xl mx-auto text-center space-y-4">
            <p>
              <span className="font-semibold">Date:</span> July 15, 2023
            </p>
            <p>
              <span className="font-semibold">Time:</span> 6:00 PM
            </p>
            <p>
              <span className="font-semibold">Location:</span> Sherry-Netherland Club
            </p>
            <p>
              <span className="font-semibold">Venue:</span> Lexington Avenue, New York, NY 10021, 5th Floor, Suite 502
            </p>
            <p>
              <span className="font-semibold">Dress Code:</span> Black Tie
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="italic">
                The theme for the night is <span className="font-semibold">Golden Noir</span>: Step into a night of
                elegance and mystery. Dress to impress in <span className="font-semibold">black</span>,{" "}
                <span className="font-semibold">gold</span>, or a striking combination of both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="relative mt-12">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e6c96a" />
              <stop offset="50%" stopColor="#f0f0e8" />
              <stop offset="100%" stopColor="#f5f5f0" />
            </linearGradient>
          </defs>
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#waveGradientBottom)"
            opacity="0.9"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="#e6c96a"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Gifts Section */}
      <section id="gifts" className="gold-section py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center text-white mb-12">A note on gifts...</h2>

          <div className="max-w-2xl mx-auto text-center space-y-6 text-gray-800">
            <p className="italic">
              "If you know me well, surprise me with something you know I'll love—your thoughtful touch means the world.
            </p>
            <p className="italic">
              If you're not sure what to get, feel free to contribute to the gift fund below and I'll treat myself to
              something special.
            </p>
            <p className="italic">Thank you so much for being part of this milestone!"</p>
            <p className="font-semibold mt-4">Roda</p>

            <div className="mt-8">
              <Link href="/gifts">
                <Button className="bg-black text-white hover:bg-gray-800">Gift Fund</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section id="photos" className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=2070&auto=format&fit=crop"
          alt="Roda in the desert"
          fill
          className="object-cover"
        />
      </section>

      {/* RSVP Section */}
      <section className="cream-section py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-serif text-[#e6c96a] mb-6">RSVP</h2>
              <p className="mb-4">
                Please confirm your attendance by the <span className="font-semibold">15th of June 2023</span>. It is
                imperative that all responses are submitted by this date to ensure proper arrangements are made.
              </p>
            </div>

            <div className="border border-[#e6c96a] p-8">
              <form onSubmit={handleRSVP} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Attendance</Label>
                  <p className="text-sm text-gray-500">
                    Please let us know if you can make it. We hope to see you there!
                  </p>
                  <RadioGroup value={attendance} onValueChange={setAttendance} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Send"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1516914589923-f105f1535f88?q=80&w=2070&auto=format&fit=crop"
          alt="Celebration"
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
