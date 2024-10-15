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
    <header className="w-full bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://i.ibb.co/7kkTHMt/soccer-ball.jpg"
              alt="The League logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-xl font-bold">The League</h1>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          {mainNavItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="outline" size="sm" className="text-white bg-transparent hover:text-white border-white hover:bg-blue-800">
            Sign In
          </Button>
        </div>
        <div className="md:hidden">
          <MobileMenu items={mainNavItems} />
        </div>
      </div>
    </header>
  )
}