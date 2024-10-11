'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"

interface MobileMenuProps {
  items: {
    name: string
    href: string
    subitems: { name: string; href: string }[]
  }[]
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <div className="md:hidden">
      <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-1">
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-purple-900 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="flex justify-between items-center mb-4">
              <Link href="/">
                <Image
                  src="/placeholder.svg"
                  alt="Premier League logo"
                  width={96}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <Button variant="ghost" onClick={() => setMobileMenuOpen(false)} className="text-white p-1">
                <X className="h-6 w-6" />
              </Button>
            </div>
            {items.map((item) => (
              <div key={item.name} className="space-y-1">
                <button
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-700 transition duration-150 ease-in-out flex items-center justify-between"
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  aria-expanded={activeDropdown === item.name}
                  aria-haspopup="true"
                >
                  {item.name}
                  {item.subitems.length > 0 && (
                    <ChevronRight className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-90' : ''}`} />
                  )}
                </button>
                {item.subitems.length > 0 && activeDropdown === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.subitems.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-purple-200 hover:text-white hover:bg-purple-700 transition duration-150 ease-in-out"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-purple-700 px-4">
            <Button variant="outline" className="w-full text-white border-white bg-purple-700 hover:bg-purple-600">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}