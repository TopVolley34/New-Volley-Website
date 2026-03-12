'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="rgba(60,233,124,0.15)"/>
        <path d="M24 14v10l6 6" stroke="#3CE97C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="24" r="10" stroke="#3CE97C" strokeWidth="2"/>
      </svg>
    ),
    title: 'Quick On-Court Assessment',
    desc: 'Complete a quick, on-court session where Volley\'s AI analyzes core pickleball skills — no match play required.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="rgba(60,233,124,0.15)"/>
        <path d="M16 32l4-8 4 4 4-12 4 8" stroke="#3CE97C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Instant Feedback',
    desc: 'Get real-time insights on every shot so you know exactly what to work on and can track your progress over time.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="rgba(60,233,124,0.15)"/>
        <path d="M18 30l3-3 3 3 3-6 3 3" stroke="#3CE97C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="15" y="17" width="18" height="16" rx="2" stroke="#3CE97C" strokeWidth="2"/>
      </svg>
    ),
    title: 'Clear Training Plan',
    desc: 'Volley gives you focused drills, instant feedback, and a clear training plan — so every session moves you forward.',
  },
];

const drills = [
  { name: 'Dinks', desc: 'Perfect your soft game at the kitchen line' },
  { name: 'Drives', desc: 'Build power and consistency on drives' },
  { name: 'Third Shot Drops', desc: 'Master the most important shot in pickleball' },
  { name: 'Volleys', desc: 'Sharpen your net play reflexes' },
  { name: 'Returns', desc: 'Develop deep, consistent returns of serve' },
  { name: 'Transition Game', desc: 'Practice moving from baseline to kitchen' },
];

export default function PickleballPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/choose_pickleball.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Pickleball</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Every Session<br />Moves You Forward.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '550px' }}>
                Volley gives you focused drills, instant feedback, and a clear training plan — so every pickleball session is purposeful and productive.
              </p>
              <Link href="/contact-us"
                style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
                Smart Training For Pickleball
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                From beginners to competitive players, Volley adapts to your level and builds a personalized path to improvement.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
              {features.map((f, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#132751', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Drills */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="drills-grid">
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Pickleball-Specific Drills
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  From dinks to drives, third shot drops to transition game — Volley covers every aspect of modern pickleball with purpose-built training.
                </p>
                <Link href="/contact-us"
                  style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '12px 28px', borderRadius: '9999px', fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                  Learn More
                </Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {drills.map((d, i) => (
                  <div key={i} style={{ backgroundColor: '#182F61', borderRadius: '1rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#3CE97C', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{d.name}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .drills-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
