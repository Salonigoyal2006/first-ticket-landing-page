'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { initialAssignments, initialTickets, type Ticket } from './workspace-data'

type Assignment = { ticketId: string; student: string; due: string; status: string }
type WorkspaceState = {
  tickets: Ticket[]
  assignments: Assignment[]
  submissions: string[]
  claimTicket: (id: string) => void
  submitWork: (id: string) => void
  createTicket: (ticket: Ticket) => void
  setTicketStatus: (id: string, status: Ticket['status']) => void
}

const WorkspaceContext = createContext<WorkspaceState | null>(null)

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [tickets, setTickets] = useState(initialTickets)
  const [assignments, setAssignments] = useState<Assignment[]>(initialAssignments)
  const [submissions, setSubmissions] = useState<string[]>([])

  const value = useMemo<WorkspaceState>(() => ({
    tickets,
    assignments,
    submissions,
    claimTicket: (id) => {
      const ticket = tickets.find((item) => item.id === id)
      if (!ticket || assignments.some((item) => item.ticketId === id)) return
      setAssignments((current) => [...current, { ticketId: id, student: 'You', due: 'Dec 02', status: 'In progress' }])
      setTickets((current) => current.map((item) => item.id === id ? { ...item, status: 'active' } : item))
    },
    submitWork: (id) => {
      setSubmissions((current) => current.includes(id) ? current : [...current, id])
      setAssignments((current) => current.map((item) => item.ticketId === id ? { ...item, status: 'Submitted' } : item))
      setTickets((current) => current.map((item) => item.id === id ? { ...item, status: 'review' } : item))
    },
    createTicket: (ticket) => setTickets((current) => [ticket, ...current]),
    setTicketStatus: (id, status) => setTickets((current) => current.map((item) => item.id === id ? { ...item, status } : item)),
  }), [tickets, assignments, submissions])

  return <WorkspaceContext.Provider value={value}>{children}</WorkspaceContext.Provider>
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext)
  if (!context) throw new Error('useWorkspace must be used inside WorkspaceProvider')
  return context
}
