'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, Check, Clock3, Compass, FileCheck2, Menu, Sparkles, Ticket, X } from 'lucide-react'

type RevealProps = { children: React.ReactNode; className?: string; delay?: number }

function AnimatedContent({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function BlurText({ children }: { children: React.ReactNode }) {
  return <span className="blur-text">{children}</span>
}

function SpotlightCard({ children, className = '' }: RevealProps) {
  function moveSpotlight(event: React.PointerEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`)
  }

  return <article onPointerMove={moveSpotlight} className={`spotlight-card ${className}`}>{children}</article>
}

const opportunities = [
  { category: 'Brand & design', title: 'Give our weekend market a fresh look', company: 'Sunday Market Co.', location: 'Brooklyn, NY · Remote-friendly', reward: '$120', time: '3–4 hours', tag: 'Creative', mark: 'SM', color: 'peach' },
  { category: 'Research', title: 'Find the next neighborhood for our café', company: 'Little Fern Coffee', location: 'Portland, OR · Local', reward: '$85', time: '2–3 hours', tag: 'Research', mark: 'LF', color: 'sage' },
  { category: 'Digital', title: 'Make our online menu easier to browse', company: 'Morrow Bakery', location: 'Austin, TX · Remote', reward: '$150', time: '4–5 hours', tag: 'Digital', mark: 'MB', color: 'blue' },
]

const steps = [
  { n: '01', icon: FileCheck2, title: 'A business shares a brief', text: 'A real local business tells us what they need, in plain language.' },
  { n: '02', icon: Sparkles, title: 'AI makes it a ticket', text: 'A clear scope, fair reward, and doable next steps—ready to go.' },
  { n: '03', icon: Compass, title: 'You do the real work', text: 'Pick a task that fits your skills, schedule, and curiosity.' },
  { n: '04', icon: Check, title: 'Your work gets verified', text: 'Get thoughtful feedback, payment, and proof you can show.' },
]

function BrandMark() {
  return <a href="#top" className="brand" aria-label="First Ticket home"><span className="brand-icon"><Ticket size={19} strokeWidth={1.8} /></span><span>FIRST TICKET<span className="brand-period">.</span></span></a>
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main id="top">
      <header className="site-header">
        <div className="nav-wrap"><BrandMark />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#opportunities" onClick={() => setMenuOpen(false)}>Explore tasks</a><a href="#for-businesses" onClick={() => setMenuOpen(false)}>For businesses</a>
          </nav>
          <div className="nav-actions"><a className="signin" href="#join">Sign in</a><a className="nav-cta" href="#opportunities">Find a ticket <ArrowUpRight size={15} /></a></div>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> REAL WORK. YOUR FIRST STEP.</div>
          <h1><BlurText>Your first real-world<br className="desktop-break" /> work <em>starts here.</em></BlurText></h1>
          <p className="hero-description">Turn your skills into experience. Work on real business challenges, build confidence and create proof of what you can do.</p>
          <div className="hero-actions"><a className="button button-dark" href="#opportunities">Find your first ticket <ArrowRight size={17} /></a><a className="button button-light" href="#for-businesses">Post a business task <ArrowUpRight size={16} /></a></div>
          <div className="hero-note"><span className="avatar-stack"><i>J</i><i>M</i><i>A</i><i>+</i></span><span>A first step that actually counts.</span></div>
        </div>
        <div className="hero-art" aria-label="Featured student task ticket preview">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="floating-note note-top"><span className="note-check"><Check size={12} /></span>Real business, real brief</div>
          <div className="floating-note note-bottom"><span className="sparkle-mini"><Sparkles size={13} /></span>Proof of work, unlocked</div>
          <article className="ticket-card">
            <div className="ticket-card-top"><span className="ticket-label"><span /> FEATURED TICKET</span><Bookmark size={17} className="bookmark-icon" /></div>
            <div className="ticket-company"><div className="company-stamp">LF</div><div><strong>Little Fern Coffee</strong><span>Independent café · Portland, OR</span></div></div>
            <h2>Help us tell our neighborhood story</h2>
            <p className="ticket-intro">We&apos;re opening a second location and need a fresh perspective on how to introduce ourselves to the block.</p>
            <div className="ticket-divider" />
            <div className="ticket-brief"><span className="brief-label">WHAT YOU&apos;LL DO</span><p>Talk to 5 locals, gather the details that make this neighborhood special, and share a one-page insight sheet.</p></div>
            <div className="ticket-meta"><span><Clock3 size={14} /> 3–4 hours</span><span className="level-pill">Beginner friendly</span></div>
            <div className="ticket-card-bottom"><div><span className="reward-label">YOUR REWARD</span><strong>$120</strong></div><a href="#opportunities" aria-label="Explore this ticket"><ArrowUpRight size={19} /></a></div>
          </article>
          <div className="ticket-index">NO. 024 <span>·</span> YOUR NEXT CHAPTER</div>
        </div>
        <a className="scroll-cue" href="#how-it-works"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="trust-strip"><div className="trust-inner"><span>SMALL TASKS. BIG FIRSTS.</span><i /><p>Built for the work between <em>“I could”</em> and <em>“I did.”</em></p><i /><span>MADE FOR WHAT&apos;S NEXT</span></div></section>

      <section className="how-section section-shell" id="how-it-works">
        <AnimatedContent className="section-heading"><div><div className="eyebrow">A CLEAR PATH TO YOUR FIRST</div><h2>Real work, made<br />more <em>reachable.</em></h2></div><p>No “years of experience required.” Just a good brief, a fair shot, and a place to start.</p></AnimatedContent>
        <div className="steps-grid">{steps.map((step, index) => { const Icon = step.icon; return <AnimatedContent key={step.n} delay={index * 90}><div className="step-card"><div className="step-top"><span>{step.n}</span><Icon size={19} strokeWidth={1.6} /></div><h3>{step.title}</h3><p>{step.text}</p>{index < steps.length - 1 && <span className="step-connector" aria-hidden="true">→</span>}</div></AnimatedContent> })}</div>
      </section>

      <section className="opportunities-section" id="opportunities"><div className="section-shell opportunities-inner">
        <AnimatedContent className="opportunities-heading"><div><div className="eyebrow">A FEW GOOD PLACES TO START</div><h2>Small tasks.<br /><em>Real momentum.</em></h2></div><a className="text-link" href="#join">Explore all tickets <ArrowRight size={16} /></a></AnimatedContent>
        <div className="opportunity-grid">{opportunities.map((item, index) => <AnimatedContent key={item.title} delay={index * 100}><SpotlightCard className={index === 0 ? 'opportunity-featured' : ''}><div className="opp-top"><span className={`company-mark ${item.color}`}>{item.mark}</span><span className="opp-type">{item.category}</span><button aria-label={`Save ${item.title}`} className="save-button"><Bookmark size={17} /></button></div><h3>{item.title}</h3><p className="opp-company">{item.company}</p><p className="opp-location">{item.location}</p><div className="opp-bottom"><span className="opp-time"><Clock3 size={14} />{item.time}</span><strong>{item.reward}</strong></div><span className="opp-tag">{item.tag}</span></SpotlightCard></AnimatedContent>)}</div>
        <p className="opportunity-footnote">Thoughtful work, clearly scoped. Every ticket is reviewed before it goes live.</p>
      </div></section>

      <section className="audience-section section-shell"><AnimatedContent className="audience-intro"><div className="eyebrow">GOOD FOR BOTH SIDES</div><h2>A first win is<br />a <em>shared thing.</em></h2></AnimatedContent>
        <AnimatedContent><article className="audience-card student-card"><div className="audience-number">01 / FOR STUDENTS</div><div className="audience-content"><div><h3>Build your story<br />while you&apos;re <em>building skills.</em></h3><p>Get out of the “need experience to get experience” loop. Take on real work, earn fairly, and leave with something you can point to.</p><a className="audience-link" href="#opportunities">Find work that fits <ArrowRight size={16} /></a></div><div className="proof-card"><span className="proof-kicker">YOUR FIRST TICKET, VERIFIED</span><div className="proof-seal"><Check size={23} /></div><strong>Neighborhood<br />research sprint</strong><span>Completed · Verified</span><div className="proof-rule" /><div className="proof-stats"><span>3.5 hrs</span><span>$120 earned</span></div></div></div></article></AnimatedContent>
        <AnimatedContent delay={90}><article className="audience-card business-card" id="for-businesses"><div className="audience-number">02 / FOR SMALL BUSINESSES</div><div className="audience-content"><div><h3>Fresh thinking.<br /><em>Without the big-agency</em> bill.</h3><p>Get a focused, useful piece of work from someone eager to do it well. Clear expectations up front. A real human on the other end.</p><a className="audience-link" href="#join">Post your first task <ArrowRight size={16} /></a></div><div className="business-brief"><div className="brief-mini-top"><span className="brief-mini-icon"><Sparkles size={14} /></span><span>FROM YOUR IDEA TO A CLEAR TICKET</span></div><div className="brief-chat user-chat">We need more locals to find our new shop.</div><div className="brief-chat ai-chat"><Sparkles size={12} /><span>Let&apos;s make that a great first project.</span></div><div className="brief-fields"><span><Check size={12} /> One clear outcome</span><span><Check size={12} /> Fair reward</span><span><Check size={12} /> Ready to post</span></div></div></div></article></AnimatedContent>
      </section>

      <section className="closing-section" id="join"><div className="closing-inner section-shell"><AnimatedContent><div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER DOESN&apos;T NEED TO WAIT</div><h2>Everyone starts<br />somewhere. <em>Start here.</em></h2><p>One small ticket can change how you see what you&apos;re capable of.</p><div className="hero-actions"><a className="button button-cream" href="#opportunities">Find your first ticket <ArrowRight size={17} /></a><a className="button button-outline-light" href="#for-businesses">I&apos;m a business <ArrowUpRight size={16} /></a></div></AnimatedContent><div className="closing-stamp" aria-hidden="true"><span>FIRST</span><Ticket size={30} /><span>FORWARD</span></div></div></section>

      <footer className="site-footer"><div className="footer-main section-shell"><div className="footer-brand"><BrandMark /><p>Real work is closer than you think.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="#how-it-works">How it works</a><a href="#opportunities">Find a ticket</a></div><div><span>FOR BUSINESS</span><a href="#for-businesses">Post a task</a><a href="#for-businesses">Why First Ticket</a></div><div><span>SAY HELLO</span><a href="mailto:hello@firstticket.example">Get in touch</a><a href="#join">Instagram ↗</a></div></div></div><div className="footer-bottom section-shell"><span>© 2025 FIRST TICKET. A good place to begin.</span><div><a href="#join">Privacy</a><a href="#join">Terms</a></div><span>MADE FOR THE FIRSTS.</span></div></footer>
    </main>
  )
}
