import { AdComponent } from '@/components/AdComponent'
import { BannerAd } from '@/components/Ads'
import { FootballClubTable } from '@/components/FootballClubTable'
import { Suspense } from 'react'

async function getFootballClubs() {
  const res = await fetch('https://football-clubs-api.vercel.app/')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const footballClubs = await getFootballClubs()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">English Football Clubs</h1>
      <p className="text-muted-foreground mb-4">or at least most of them</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <BannerAd />
          <Suspense fallback={<div>Loading...</div>}>
            <FootballClubTable clubs={footballClubs} />
          </Suspense>
        </div>
        <div>
          <AdComponent 
            title="Premium Membership" 
            content="Get access to exclusive content and features with our Premium Membership!" 
          />
        </div>
      </div>
    </div>
  )
}