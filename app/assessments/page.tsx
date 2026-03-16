'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

export default function AssessmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Volley Assessments</p>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, maxWidth: '800px', margin: '0 auto 1.5rem' }}>
              The First Objective Rating System for Racquet Sports
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 3rem' }}>
              Stop guessing where you stand. Volley Assessments delivers AI-powered, data-driven player ratings for pickleball, padel, platform tennis, and tennis.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/get-a-demo"
                style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                Get a Demo (Clubs)
              </Link>
              <Link href="/for-players"
                style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#3CE97C'; e.currentTarget.style.color = '#3CE97C'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white'; }}>
                Find a Club (Players)
              </Link>
            </div>
          </div>
        </section>

        {/* Player Experience */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
                The Player Experience
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                A 20-minute session that gives you more insight into your game than years of casual play.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="exp-grid">
              {[
                { step: 'Step 1', title: 'On-Court Assessment', desc: 'Step on court for a quick session. Volley\'s AI evaluates core skills — strokes, placement, movement patterns, and shot selection — across your sport.', color: '#3CE97C' },
                { step: 'Step 2', title: 'Your Rating Output', desc: 'Receive a detailed rating breakdown: overall score, skill-by-skill analysis, strengths, and weaknesses. Stored in your digital player profile.', color: '#5170B3' },
                { step: 'Step 3', title: 'Your Improvement Roadmap', desc: 'Get a personalized development plan: recommended drills, focus areas, and progression targets. Retake assessments to track improvement over time.', color: '#e8a838' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid #e2e8f0' }}>
                  <span style={{ color: item.color, fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.step}</span>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#132751', margin: '0.75rem 0' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .exp-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Club Experience */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="club-exp-grid">
              <div>
                <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>The Club Experience</p>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>
                  What a Rated Membership Looks Like
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  When your members have objective ratings, everything changes. Matches are more competitive. Programs are better targeted. Retention improves. Your club stands out.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['Objective member ratings across all sports', 'Better-matched competition and events', 'Data-driven coaching and programming', 'Member progress tracking and engagement', 'Competitive differentiation for your club'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3CE97C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#132751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { stat: '10x', label: 'more reps per session' },
                  { stat: '83%', label: 'train more frequently' },
                  { stat: '20min', label: 'assessment session' },
                  { stat: '4', label: 'sports supported' },
                ].map((s, i) => (
                  <div key={i} style={{ backgroundColor: '#182F61', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '2rem', color: '#3CE97C', lineHeight: 1 }}>{s.stat}</p>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.5rem' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .club-exp-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Sports Coverage */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem', textAlign: 'center' }}>
              Assessments Across Every Sport
            </h2>
            <p style={{ color: 'rgba(19,39,81,0.5)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
              Volley is a truly universal system — one platform that delivers objective ratings for every racquet sport.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="sports-assess-grid">
              {[
                { name: 'Pickleball', href: '/pickleball', img: '/images/choose_pickleball.webp', skills: 'Dinks, drives, third shots, volleys' },
                { name: 'Padel', href: '/padel', img: '/images/choose_padel.png', skills: 'Wall play, volleys, overheads, lobs' },
                { name: 'Platform Tennis', href: '#', img: '/images/choose_platformtennis.webp', skills: 'Screen shots, volleys, wire play' },
                { name: 'Tennis', href: '#', img: '/images/choose_tennis.webp', skills: 'Groundstrokes, serves, net play' },
              ].map(s => (
                <Link key={s.name} href={s.href}
                  style={{ display: 'block', borderRadius: '1rem', overflow: 'hidden', textDecoration: 'none', border: '1px solid #e2e8f0', transition: 'box-shadow 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 30px rgba(19,39,81,0.12)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                  <div style={{ position: 'relative', height: '140px' }}>
                    <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#132751', marginBottom: '0.5rem' }}>{s.name}</h3>
                    <p style={{ color: 'rgba(19,39,81,0.5)', fontSize: '0.85rem', lineHeight: 1.5 }}>{s.skills}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .sports-assess-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 480px) { .sports-assess-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner variant="general" />
      </main>
      <Footer />
    </>
  );
}
