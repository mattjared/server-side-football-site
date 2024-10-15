'use client'

import { useState, useMemo } from 'react'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

type FootballClub = {
  id: number;
  name: string
  league: string
  nickname: string
  level: number
}

// const getRowClassName = (index: number, name: string) => {
//   if (name.includes('promoted')) return 'bg-green-800'
//   if (name.includes('transferred')) return 'bg-purple-800'
//   if (name.includes('relegated') || name.includes('demoted')) return 'bg-red-900'
//   return index % 2 === 0 ? 'bg-purple-900' : 'bg-purple-800'
// }

export function FootballClubTable({ clubs }: { clubs: FootballClub[] }) {
  const [filter, setFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10;

  const filteredClubs = useMemo(() => {
    return clubs.filter(club =>
      club.name.toLowerCase().includes(filter.toLowerCase()) ||
      club.league.toLowerCase().includes(filter.toLowerCase()) ||
      club.nickname.toLowerCase().includes(filter.toLowerCase()) ||
      club.level.toString().includes(filter.toLowerCase())
    )
  }, [clubs, filter])

  const totalPages = Math.ceil(filteredClubs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentClubs = filteredClubs.slice(startIndex, endIndex)

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }
  

  return (
    <Card>
      <CardHeader>
        <CardTitle>English Football Clubs</CardTitle>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          placeholder="Filter clubs..."
          value={filter}
          onChange={handleFilterChange}
          className="mb-4"
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>League</TableHead>
              <TableHead>Nickname</TableHead>
              <TableHead>Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentClubs.map(club => (
              <TableRow key={club.id} >
                <TableCell>{club.name}</TableCell>
                <TableCell>{club.league}</TableCell>
                <TableCell>{club.nickname}</TableCell>
                <TableCell>{club.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-4">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}