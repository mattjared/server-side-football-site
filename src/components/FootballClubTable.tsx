'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"

type FootballClub = {
  name: string
  league: string
  nickname: string
  level: number
}

const getRowClassName = (index: number, name: string) => {
  if (name.includes('promoted')) return 'bg-green-800'
  if (name.includes('transferred')) return 'bg-purple-800'
  if (name.includes('relegated') || name.includes('demoted')) return 'bg-red-900'
  return index % 2 === 0 ? 'bg-purple-900' : 'bg-purple-800'
}

export function FootballClubTable({ clubs }: { clubs: FootballClub[] }) {
  const [filter, setFilter] = useState('')

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(filter.toLowerCase()) ||
    club.league.toLowerCase().includes(filter.toLowerCase()) ||
    club.nickname.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Input
        type="text"
        placeholder="Filter clubs..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 bg-gray-800 text-gray-100 border-gray-700 placeholder-gray-500"
      />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-left">
              <th className="p-3 font-semibold">Name</th>
              <th className="p-3 font-semibold">League</th>
              <th className="p-3 font-semibold">Nickname</th>
              <th className="p-3 font-semibold">Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredClubs.map((club, index) => (
              <tr key={club.name} className={getRowClassName(index, club.name.toLowerCase())}>
                <td className="p-3">{club.name}</td>
                <td className="p-3">{club.league}</td>
                <td className="p-3">{club.nickname}</td>
                <td className="p-3">{club.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}