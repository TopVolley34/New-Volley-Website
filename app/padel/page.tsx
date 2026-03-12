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
    title: 'Padel-Specific Assessment',
    desc: 'Step on court for a quick, 20-minute padel-specific session where Volley evaluates wall play, volleys, overheads, lobs, and movement patterns.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="rgba(60,233,124,0.15)"/>
        <path d="M16 32l4-8 4 4 4-12 4 8" stroke="#3CE97C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Structured Development Path',
    desc: 'The Player Development Engine gives you a clear, structured path to improvement based on your skill level, shot execution, and court awareness.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="rgba(60,233,124,0.15)"/>
        <path d="M18 30l3-3 3 3 3-6 3 3" stroke="#3CE97C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="15" y="17" width="18" height="16" rx="2" stroke="#3CE97C" strokeWidth="2"/>
      </svg>
    ),
    title: 'Game-Like Feeds',
    desc: 'Volley provides game-like feeds, instant feedback, and training built for the unique demands of padel — including wall play and glass tactics.',
  },
];

const skills = [
  { name: 'Wall Play', desc: 'Master rebounds off the back and side walls' },
  { name: 'Volleys', desc: 'Sharpen net play with precise volley training' },
  { name: 'Overheads', desc: 'Build power and placement on smashes' },
  { name: 'Lobs', desc: 'Develop the defensive lob with accuracy' },
  { name: 'Bandeja', desc: 'Practice the signature padel overhead shot' },
  { name: 'Court Movement', desc: 'Improve positioning and court awareness' },
];

export default function PadelPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/choose_padel.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Padel</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Train Smarter.<br />Play Better Padel.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '550px' }}>
                As padel gains traction, Volley supports players with a system that helps them customize their practice and get the most out of every session on court.
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

        {/* PDE Section */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
                Built For The Demands Of Padel
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                Volley&apos;s Player Development Engine starts with an AI-powered assessment followed by personalized training based on your skill level, shot execution, and court awareness.
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

        {/* Skills Section */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="skills-grid">
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Master Every Padel Skill
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  From wall play to net dominance, Volley delivers game-like feeds and instant feedback built for the unique demands of padel.
                </p>
                <Link href="/contact-us"
                  style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '12px 28px', borderRadius: '9999px', fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                  Learn More
                </Link>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {skills.map((s, i) => (
                  <div key={i} style={{ backgroundColor: '#182F61', borderRadius: '1rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: '#3CE97C', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{s.name}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .skills-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
