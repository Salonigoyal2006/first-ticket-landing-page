'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, CircleHelp, Command, Compass, FileCheck2, LayoutDashboard, Menu, MessageCircle, Plus, Sparkles, Ticket, X } from 'lucide-react'
import { useWorkspace } from './workspace-provider'

const studentLinks = [
  { label: 'Overview', href: '/student/dashboard', icon: LayoutDashboard },
  { label: 'Find tickets', href: '/student/tickets', icon: Compass },
  { label: 'My assignments', href: '/student/assignments', icon: Ticket },
  { label: 'AI coach', href: '/student/ai-coach', icon: Sparkles },
  { label: 'Portfolio', href: '/student/portfolio', icon: FileCheck2 },
]
const businessLinks = [
  { label: 'Overview', href: '/business/dashboard', icon: LayoutDashboard },
  { label: 'Create a ticket', href: '/business/create-ticket', icon: Plus },
  { label: 'Manage tickets', href: '/business/tickets', icon: Ticket },
  { label: 'Submissions', href: '/business/submissions', icon: FileCheck2 },
]

export function WorkspaceShell({ type, children }: { type: 'student' | 'business'; children: React.ReactNode }) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { tickets } = useWorkspace()
  const isStudent = type === 'student'
  const links = isStudent ? studentLinks : businessLinks
  const title = isStudent ? 'Student workspace' : 'Business workspace'
  const root = isStudent ? '/student/dashboard' : '/business/dashboard'

  return (
    <div className="workspace-frame">
      <aside className={`workspace-sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <Link href="/" className="workspace-brand" aria-label="First Ticket home">
          <span className="brand-icon">FT</span><span>FIRST TICKET<span className="brand-period">.</span></span>
        </Link>
        <div className="workspace-switcher"><span className="switcher-icon">{isStudent ? 'A' : 'N'}</span><span><small>WORKSPACE</small><strong>{title}</strong></span><ChevronDown size={14} /></div>
        <div className="sidebar-label">WORKSPACE</div>
        <nav className="workspace-nav" aria-label={`${title} navigation`}>
          {links.map(({ label, href, icon: Icon }) => {
            const active = pathname === href || (href.endsWith('/tickets') && pathname.startsWith(`${href}/`))
            return <Link key={href} href={href} onClick={() => setMenuOpen(false)} className={active ? 'workspace-nav-link active' : 'workspace-nav-link'}><Icon size={16} strokeWidth={1.7} /><span>{label}</span>{label === 'Find tickets' && <span className="nav-count">{tickets.filter(ticket => ticket.status === 'open').length.toString().padStart(2, '0')}</span>}</Link>
          })}
        </nav>
        <div className="sidebar-bottom">
          <div className="workspace-help"><span className="help-icon"><CircleHelp size={16} /></span><span><strong>Need a hand?</strong><small>Visit our help center</small></span><ArrowUpRight size={13} /></div>
          <div className="sidebar-user"><span className="user-avatar">{isStudent ? 'AC' : 'NS'}</span><span><strong>{isStudent ? 'Avery Chen' : 'Northstar Coffee'}</strong><small>{isStudent ? 'Student · Starter' : 'Business account'}</small></span><ChevronDown size={14} /></div>
        </div>
      </aside>
      <div className="workspace-main">
        <header className="workspace-topbar">
          <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <div className="breadcrumbs"><Link href={root}>{title}</Link><span>/</span><span className="breadcrumb-current">{pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ') ?? 'Overview'}</span></div>
          <div className="topbar-actions"><span className="demo-indicator"><i /> DEMO MODE</span><button type="button" className="icon-button" aria-label="Open help"><MessageCircle size={17} /></button><span className="top-avatar">{isStudent ? 'AC' : 'NS'}</span></div>
        </header>
        <main className="workspace-content">{children}</main>
        <footer className="workspace-footer"><span>FIRST TICKET<span className="brand-period">.</span> <span className="footer-muted">A first step is still a real step.</span></span><span className="footer-demo"><Command size={12} /> FRONTEND DEMO · DATA RESETS ON REFRESH</span></footer>
      </div>
    </div>
  )
}
