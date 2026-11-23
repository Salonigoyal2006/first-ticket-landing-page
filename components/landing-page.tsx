'use client'

import { useState } from 'react'
import { MotionConfig, motion } from 'motion/react'
import AnimatedContent from '@/components/AnimatedContent'
import BlurText from '@/components/BlurText'
import SpotlightCard from '@/components/SpotlightCard'
import { ArrowDown, ArrowRight, ArrowUpRight, Bookmark, Check, Clock3, Compass, FileCheck2, Menu, Sparkles, Ticket, X } from 'lucide-react'

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

function TicketTransformation() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="transform-section section-shell" aria-labelledby="transform-title">
      <AnimatedContent className="transform-heading" distance={22} blur={1} duration={0.7}>
        <div><div className="eyebrow">A LITTLE AI. A LOT MORE CLARITY.</div><h2 id="transform-title">From “we need help”<br />to <em>work that works.</em></h2></div>
        <p>A simple idea becomes a thoughtful, ready-to-go ticket—with the details everyone needs to get started.</p>
      </AnimatedContent>
      <AnimatedContent className={`transform-board ${isPlaying ? 'is-playing' : ''}`} distance={24} blur={1} duration={0.75} delay={0.1} onStart={() => setIsPlaying(true)} onComplete={() => setIsPlaying(true)}>
        <div className="transform-input">
          <div className="transform-card-head"><span className="brief-icon"><FileCheck2 size={15} /></span><span>THE BUSINESS BRIEF</span><span className="live-dot">● &nbsp;LIVE EXAMPLE</span></div>
          <p className="transform-quote">“We just opened a little bakery and want more people in the neighborhood to find us.”</p>
          <div className="transform-source"><span className="source-avatar">MB</span><span><strong>Morrow Bakery</strong><small>A small business with a big idea</small></span></div>
        </div>
        <div className="transform-bridge" aria-hidden="true"><span className="bridge-line" /><span className="ai-orb"><Sparkles size={18} /></span><span className="bridge-line" /></div>
        <div className="transform-output">
          <div className="transform-card-head"><span className="ticket-spark"><Sparkles size={14} /></span><span>FIRST TICKET AI</span><span className="ready-label"><Check size={11} /> STRUCTURED</span></div>
          <div className="processing-row"><span className="processing-pulse" /><span>Turning a good idea into a clear first step</span></div>
          <div className="generated-ticket">
            <div className="generated-top"><span>THE TICKET</span><span className="generated-number">FT—028</span></div>
            <h3 className="generated-title">Help your neighborhood discover Morrow Bakery</h3>
            <div className="generated-fields">
              <div className="generated-field field-skills"><span>SKILLS</span><strong>Local research · Storytelling</strong></div>
              <div className="generated-field field-deliverable"><span>DELIVERABLE</span><strong>A one-page neighborhood discovery plan</strong></div>
              <div className="generated-field field-difficulty"><span>DIFFICULTY</span><strong className="difficulty-dots"><i /><i /><i /> Beginner friendly</strong></div>
              <div className="generated-field field-time"><span>ESTIMATED TIME</span><strong>3–4 hours</strong></div>
            </div>
            <div className="generated-footer"><span><Check size={13} /> Clear scope, fair expectations</span><strong>$95</strong></div>
          </div>
        </div>
      </AnimatedContent>
      <div className="transform-caption"><span>01 / THE IDEA</span><span>02 / A LITTLE STRUCTURE</span><span>03 / READY FOR A FIRST TICKET</span></div>
    </section>
  )
}

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <MotionConfig reducedMotion="user">
    <main id="top">
      <header className="site-header">
        <div className="nav-wrap"><BrandMark />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a><a href="#opportunities" onClick={() => setMenuOpen(false)}>Explore tasks</a><a href="#for-businesses" onClick={() => setMenuOpen(false)}>For businesses</a>
          </nav>
          <div className="nav-actions"><a className="signin" href="/student/dashboard">Student demo</a><a className="nav-cta" href="/student/tickets">Find a ticket <ArrowUpRight size={15} /></a></div>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> REAL WORK. YOUR FIRST STEP.</div>
          <h1 className="hero-title"><span className="hero-line"><BlurText text="Your first real-world" animateBy="words" delay={85} stepDuration={0.34} distance={18} blur={7} threshold={0.01} /></span><span className="hero-line hero-second-line"><BlurText text="work" animateBy="words" delay={85} stepDuration={0.34} distance={18} blur={7} threshold={0.01} /><BlurText text="starts here." className="hero-highlight" animateBy="words" delay={105} stepDuration={0.38} distance={20} blur={8} threshold={0.01} /></span></h1>
          <p className="hero-description">Turn your skills into experience. Work on real business challenges, build confidence and create proof of what you can do.</p>
          <div className="hero-actions"><a className="button button-dark" href="/student/tickets">Find your first ticket <ArrowRight size={17} /></a><a className="button button-light" href="/business/create-ticket">Post a business task <ArrowUpRight size={16} /></a></div>
          <div className="hero-note"><span className="avatar-stack"><i>J</i><i>M</i><i>A</i><i>+</i></span><span>A first step that actually counts.</span></div>
        </div>
        <div className="hero-art" aria-label="Featured student task ticket preview">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <motion.div className="floating-note note-top" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: [9, 0, -3, 0] }} transition={{ opacity: { duration: 0.55, delay: 0.8 }, y: { duration: 5, delay: 0.8, repeat: Infinity, ease: 'easeInOut' } }}><span className="note-check"><Check size={12} /></span>Real business, real brief</motion.div>
          <motion.div className="floating-note note-bottom" initial={{ opacity: 0, y: 9 }} animate={{ opacity: 1, y: [9, 0, 3, 0] }} transition={{ opacity: { duration: 0.55, delay: 1.05 }, y: { duration: 5.5, delay: 1.05, repeat: Infinity, ease: 'easeInOut' } }}><span className="sparkle-mini"><Sparkles size={13} /></span>Proof of work, unlocked</motion.div>
          <motion.article className="ticket-card" initial={{ opacity: 0, y: 18, rotate: 0 }} animate={{ opacity: 1, y: [18, 0, -4, 0], rotate: [0, 2.2, 1.7, 2.2] }} transition={{ opacity: { duration: 0.65, delay: 0.25 }, y: { duration: 7, delay: 0.25, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 7, delay: 0.25, repeat: Infinity, ease: 'easeInOut' } }}>
            <div className="ticket-card-top"><span className="ticket-label"><span /> FEATURED TICKET</span><Bookmark size={17} className="bookmark-icon" /></div>
            <div className="ticket-company"><div className="company-stamp">LF</div><div><strong>Little Fern Coffee</strong><span>Independent café · Portland, OR</span></div></div>
            <h2>Help us tell our neighborhood story</h2>
            <p className="ticket-intro">We&apos;re opening a second location and need a fresh perspective on how to introduce ourselves to the block.</p>
            <div className="ticket-divider" />
            <div className="ticket-brief"><span className="brief-label">WHAT YOU&apos;LL DO</span><p>Talk to 5 locals, gather the details that make this neighborhood special, and share a one-page insight sheet.</p></div>
            <div className="ticket-meta"><span><Clock3 size={14} /> 3–4 hours</span><span className="level-pill">Beginner friendly</span></div>
            <div className="ticket-card-bottom"><div><span className="reward-label">YOUR REWARD</span><strong>$120</strong></div><a href="/student/tickets" aria-label="Explore this ticket"><ArrowUpRight size={19} /></a></div>
          </motion.article>
          <div className="ticket-index">NO. 024 <span>·</span> YOUR NEXT CHAPTER</div>
        </div>
        <a className="scroll-cue" href="#how-it-works"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      </section>

      <section className="trust-strip"><div className="trust-inner"><span>SMALL TASKS. BIG FIRSTS.</span><i /><p>Built for the work between <em>“I could”</em> and <em>“I did.”</em></p><i /><span>MADE FOR WHAT&apos;S NEXT</span></div></section>

      <section className="how-section section-shell" id="how-it-works">
        <AnimatedContent className="section-heading" distance={22} blur={1} duration={0.65}><div><div className="eyebrow">A CLEAR PATH TO YOUR FIRST</div><h2>Real work, made<br />more <em>reachable.</em></h2></div><p>No “years of experience required.” Just a good brief, a fair shot, and a place to start.</p></AnimatedContent>
        <AnimatedContent className="steps-grid" distance={18} blur={0.5} duration={0.65} stagger={0.12}>{steps.map((step, index) => { const Icon = step.icon; return <div className={`step-card step-${index + 1}`} key={step.n}><div className="step-top"><span>{step.n}</span><Icon size={19} strokeWidth={1.6} /></div><h3>{step.title}</h3><p>{step.text}</p>{index < steps.length - 1 && <span className="step-connector" aria-hidden="true">→</span>}</div> })}</AnimatedContent>
        <div className="workflow-track" aria-label="Business brief to AI ticket to student work to verified proof"><div className="workflow-track-line" /><div className="workflow-progress" /><div className="workflow-nodes">{['Business brief', 'AI ticket', 'Student work', 'Verified proof'].map((label, index) => <span key={label} className={`workflow-node workflow-node-${index + 1}`}><i /><b>{label}</b></span>)}</div></div>
      </section>

      <TicketTransformation />

      <section className="opportunities-section" id="opportunities"><div className="section-shell opportunities-inner">
        <AnimatedContent className="opportunities-heading" distance={22} blur={1} duration={0.65}><div><div className="eyebrow">A FEW GOOD PLACES TO START</div><h2>Small tasks.<br /><em>Real momentum.</em></h2></div><a className="text-link" href="/student/tickets">Explore all tickets <ArrowRight size={16} /></a></AnimatedContent>
        <AnimatedContent className="opportunity-grid" distance={24} blur={1} duration={0.7} stagger={0.13}>{opportunities.map((item, index) => <SpotlightCard key={item.title} theme="light" spotlightColor="#D97745" intensity={0.19} spotlightSize={290} softness={0.88} borderGlow={0.28} flare={false} className={`spotlight-card ${index === 0 ? 'opportunity-featured' : ''}`} style={{ '--spotlight-card-surface': index === 0 ? '#fffefa' : '#fbfaf6' } as React.CSSProperties}><div className="opp-top"><span className={`company-mark ${item.color}`}>{item.mark}</span><span className="opp-type">{item.category}</span><button aria-label={`Save ${item.title}`} className="save-button"><Bookmark size={17} /></button></div><h3>{item.title}</h3><p className="opp-company">{item.company}</p><p className="opp-location">{item.location}</p><div className="opp-bottom"><span className="opp-time"><Clock3 size={14} />{item.time}</span><strong>{item.reward}</strong></div><span className="opp-tag">{item.tag}</span></SpotlightCard>)}</AnimatedContent>
        <p className="opportunity-footnote">Thoughtful work, clearly scoped. Every ticket is reviewed before it goes live.</p>
      </div></section>

      <section className="audience-section section-shell"><AnimatedContent className="audience-intro" distance={22} blur={1}><div className="eyebrow">GOOD FOR BOTH SIDES</div><h2>A first win is<br />a <em>shared thing.</em></h2></AnimatedContent>
        <AnimatedContent distance={24} blur={1}><article className="audience-card student-card"><div className="audience-number">01 / FOR STUDENTS</div><div className="audience-content"><div><h3>Build your story<br />while you&apos;re <em>building skills.</em></h3><p>Get out of the “need experience to get experience” loop. Take on real work, earn fairly, and leave with something you can point to.</p><a className="audience-link" href="/student/dashboard">Find work that fits <ArrowRight size={16} /></a></div><div className="proof-card"><span className="proof-kicker">YOUR FIRST TICKET, VERIFIED</span><div className="proof-seal"><Check size={23} /></div><strong>Neighborhood<br />research sprint</strong><span>Completed · Verified</span><div className="proof-rule" /><div className="proof-stats"><span>3.5 hrs</span><span>$120 earned</span></div></div></div></article></AnimatedContent>
        <AnimatedContent delay={0.1} distance={24} blur={1}><article className="audience-card business-card" id="for-businesses"><div className="audience-number">02 / FOR SMALL BUSINESSES</div><div className="audience-content"><div><h3>Fresh thinking.<br /><em>Without the big-agency</em> bill.</h3><p>Get a focused, useful piece of work from someone eager to do it well. Clear expectations up front. A real human on the other end.</p><a className="audience-link" href="/business/create-ticket">Post your first task <ArrowRight size={16} /></a></div><div className="business-brief"><div className="brief-mini-top"><span className="brief-mini-icon"><Sparkles size={14} /></span><span>FROM YOUR IDEA TO A CLEAR TICKET</span></div><div className="brief-chat user-chat">We need more locals to find our new shop.</div><div className="brief-chat ai-chat"><Sparkles size={12} /><span>Let&apos;s make that a great first project.</span></div><div className="brief-fields"><span><Check size={12} /> One clear outcome</span><span><Check size={12} /> Fair reward</span><span><Check size={12} /> Ready to post</span></div></div></div></article></AnimatedContent>
      </section>

      <section className="closing-section" id="join"><div className="closing-inner section-shell"><AnimatedContent distance={22} blur={1}><div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER DOESN&apos;T NEED TO WAIT</div><h2>Everyone starts<br />somewhere. <em>Start here.</em></h2><p>One small ticket can change how you see what you&apos;re capable of.</p><div className="hero-actions"><a className="button button-cream" href="/student/tickets">Find your first ticket <ArrowRight size={17} /></a><a className="button button-outline-light" href="/business/dashboard">I&apos;m a business <ArrowUpRight size={16} /></a></div></AnimatedContent><div className="closing-stamp" aria-hidden="true"><span>FIRST</span><Ticket size={30} /><span>FORWARD</span></div></div></section>

      <footer className="site-footer"><div className="footer-main section-shell"><div className="footer-brand"><BrandMark /><p>Real work is closer than you think.</p></div><div className="footer-links"><div><span>EXPLORE</span><a href="#how-it-works">How it works</a><a href="#opportunities">Find a ticket</a></div><div><span>FOR BUSINESS</span><a href="#for-businesses">Post a task</a><a href="#for-businesses">Why First Ticket</a></div><div><span>SAY HELLO</span><a href="mailto:hello@firstticket.example">Get in touch</a><a href="#join">Instagram ↗</a></div></div></div><div className="footer-bottom section-shell"><span>© 2025 FIRST TICKET. A good place to begin.</span><div><a href="#join">Privacy</a><a href="#join">Terms</a></div><span>MADE FOR THE FIRSTS.</span></div></footer>
    </main>
    </MotionConfig>
  )
}
