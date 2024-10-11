import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import MobileMenu from './MobileMenu'
import NavItem from './NavItem'

const mainNavItems = [
  { name: "Home", href: "/", subitems: [] },
  { name: "Fixtures", href: "/fixtures", subitems: [
    { name: "Results", href: "/fixtures/results" },
    { name: "Tables", href: "/fixtures/tables" },
    { name: "Transfers", href: "/fixtures/transfers" }
  ]},
  { name: "Video", href: "/video", subitems: [
    { name: "Latest", href: "/video/latest" },
    { name: "Highlights", href: "/video/highlights" },
    { name: "Features", href: "/video/features" }
  ]},
  { name: "Clubs", href: "/clubs", subitems: [
    { name: "Players", href: "/clubs/players" },
    { name: "Managers", href: "/clubs/managers" },
    { name: "Stadiums", href: "/clubs/stadiums" }
  ]},
  { name: "More", href: "/more", subitems: [
    { name: "Stats", href: "/more/stats" },
    { name: "Fantasy", href: "/more/fantasy" },
    { name: "Awards", href: "/more/awards" },
    { name: "Social", href: "/more/social" }
  ]}
]

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-purple-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/placeholder.svg"
                  alt="Premier League logo"
                  width={96}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-1 lg:space-x-4">
              {mainNavItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button variant="outline" size="sm" className="text-white border-white bg-purple-700 hover:bg-purple-600">
              Sign In
            </Button>
          </div>
          <MobileMenu items={mainNavItems} />
        </div>
      </div>
    </header>
  )
}