import Image from 'next/image'
import { Button } from "./ui/button"
import { ShoppingBag } from 'lucide-react'

export const BannerAd = () => (
<div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow-md">
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-2xl font-bold mb-2">Official Premier League Store</h2>
      <p className="mb-4">Get 20% off all kits! Limited time offer.</p>
      <Button className="bg-white text-blue-800 hover:bg-blue-100">
        <ShoppingBag className="mr-2 h-4 w-4" />
        Shop Now
      </Button>
    </div>
    <Image
          src="https://i.ibb.co/T2HCqsS/premier-league.jpg"
          alt="Premier League Ball"
          width={200}
          height={200}
          className="rounded-full"
        />
  </div>
</div>
)


export const SponsorAd = () => (
  <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
    <div className="flex items-center justify-between">
      <Image
        src="/placeholder.svg?height=50&width=120"
        alt="Sponsor Logo"
        width={120}
        height={50}
      />
      <p className="text-sm text-gray-600">Official Premier League Partner</p>
    </div>
  </div>
)

export const FantasyAd = () => (
  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-bold mb-2">Fantasy Premier League</h3>
    <p className="mb-4">Create your team now and compete with millions of players worldwide!</p>
    <Button variant="outline" className="bg-white text-purple-800 hover:bg-purple-100">
      Play Now
    </Button>
  </div>
)

export const VideoAd = () => (
  <div className="relative bg-black rounded-lg shadow-md mb-4 overflow-hidden">
    <Image
      src="/placeholder.svg?height=200&width=400"
      alt="Video Thumbnail"
      width={400}
      height={200}
      className="w-full"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
        Watch Highlights
      </Button>
    </div>
  </div>
)

export default function Ads() {
  return (
    <div className="space-y-4">
      <BannerAd />
      <SponsorAd />
      <FantasyAd />
      <VideoAd />
    </div>
  )
}