"use client"
import { useState } from 'react'
import { Search, Menu, X, ChevronDown, Play, Download, Star } from 'lucide-react'
import Link from 'next/link'

export default function SmartFinanceHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Smart Finance
          </Link>
          <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Expert Advice
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Tutorials
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Resources
            </Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-black py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Expert Advice
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Tutorials
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Resources
            </Link>
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Unlock Your Financial Potential
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Access the best financial ideas and resources curated by top experts
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for financial topics..."
              className="w-full bg-neutral-950 text-white border border-gray-700 rounded-full py-3 px-6 pr-12 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute right-4 top-3 text-gray-500" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Trending Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-neutral-950 rounded-lg p-6 hover:bg-gray-750 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">
                  Investment Strategies for 2024
                </h3>
                <p className="text-gray-400 mb-4">
                  Learn how to optimize your portfolio for the upcoming year...
                </p>
                <Link
                  href="#"
                  className="text-blue-500 hover:underline inline-flex items-center"
                >
                  Read More <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Expert Advice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-neutral-950 rounded-lg p-6 flex items-start"
              >
                <img
                  src={`https://i.pravatar.cc/60?img=${i}`}
                  alt="Expert"
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    John Doe, Financial Advisor
                  </h3>
                  <p className="text-gray-400 mb-4">
                    "The key to long-term wealth is consistent, disciplined
                    investing..."
                  </p>
                  <Link
                    href="#"
                    className="text-blue-500 hover:underline inline-flex items-center"
                  >
                    Read Full Article <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-neutral-950 rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={`https://picsum.photos/seed/${i}/400/225`}
                    alt="Tutorial thumbnail"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-500 rounded-full p-3">
                      <Play className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Understanding Market Trends
                  </h3>
                  <p className="text-gray-400">
                    A comprehensive guide to analyzing and predicting market
                    movements
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Downloadable Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-neutral-950 rounded-lg p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    2024 Tax Planning Guide
                  </h3>
                  <p className="text-gray-400">
                    Essential information for optimizing your tax strategy
                  </p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-colors">
                  <Download className="h-6 w-6" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Success Stories</h2>
          <div className="bg-neutral-950 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src="https://i.pravatar.cc/60?img=5"
                alt="User"
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
            </div>
            <p className="text-gray-400">
              "Thanks to Smart Finance, I was able to create a solid investment
              strategy that helped me achieve financial independence. The
              expert advice and resources provided were invaluable in my
              journey."
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-950 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Smart Finance</h3>
              <p className="text-gray-400">
                Empowering you with the knowledge and tools for financial
                success.
              </p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-500">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest financial insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700 text-white rounded-l-full py-2 px-4 focus:outline-none"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-full py-2 px-4 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Smart Finance. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}