import { FootballClubTable } from '@/components/FootballClubTable'

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
    <main className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-2">EnglishFootball Clubs</h1>
        <p className="text-center text-gray-400 mb-6">or at least most of them</p>
        <FootballClubTable clubs={footballClubs} />
      </div>
    </main>
  )
}