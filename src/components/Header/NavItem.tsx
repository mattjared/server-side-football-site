'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown } from "lucide-react"

interface NavItemProps {
  item: {
    name: string
    href: string
    subitems: { name: string; href: string }[]
  }
}

export default function NavItem({ item }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 40)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link
        href={item.href}
        className="px-2 py-1 rounded-md text-sm font-medium hover:opacity-80 transition duration-150 ease-in-out flex items-center"
      >
        {item.name}
        {item.subitems.length > 0 && <ChevronDown className="ml-1 h-3 w-3" />}
      </Link>
      {item.subitems.length > 0 && isOpen && (
        <div
          className="absolute z-10 left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={`${item.name}-menu`}
        >
          <div className="py-1">
            {item.subitems.map((subitem) => (
              <Link
                key={subitem.name}
                href={subitem.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {subitem.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}