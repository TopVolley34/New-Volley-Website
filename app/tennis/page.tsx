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
    title: 'AI-Powered Assessment',
    desc: 'Complete a short, on-court session where Volley\'s AI captures consistent, objective performance data across all key tennis strokes.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="rgba(60,233,124,0.15)"/>
        <path d="M16 32l4-8 4 4 4-12 4 8" stroke="#3CE97C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Performance Insights',
    desc: 'Detailed breakdowns help you understand your strengths and areas for growth, with every result stored in your digital player profile.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="rgba(60,233,124,0.15)"/>
        <path d="M18 30l3-3 3 3 3-6 3 3" stroke="#3CE97C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="15" y="17" width="18" height="16" rx="2" stroke="#3CE97C" strokeWidth="2"/>
      </svg>
    ),
    title: 'Personalized Training',
    desc: 'Based on your player profile, Volley recommends drills, workouts, and training paths tailored to your goals and skill level.',
  },
];

const drills = [
  { name: 'Returns', desc: 'Practice return of serve with varied placement and spin' },
  { name: 'Forehands', desc: 'Build consistent, powerful forehand strokes' },
  { name: 'Net Play', desc: 'Sharpen your volleys and overhead game' },
  { name: 'Rally Depth', desc: 'Develop deep, consistent groundstrokes' },
  { name: 'Singles Patterns', desc: 'Work on point construction for singles play' },
  { name: 'Doubles Strategy', desc: 'Train formations and doubles-specific shots' },
];

export default function TennisPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/choose_tennis.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Tennis</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Stop Guessing.<br />Start Progressing.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '550px' }}>
                Volley delivers meaningful reps when a hitting partner or coach isn&apos;t available. It adapts to your skill level and style of play — this isn&apos;t just a ball machine, it&apos;s a smart trainer built for serious improvement.
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

        {/* Player Development Engine */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
                The Player Development Engine
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                A systematic, scalable approach to player development. Volley combines AI-driven assessments and personalized training paths into one seamless system.
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

        {/* Drills Section */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="drills-grid">
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Drills Built For Your Game
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Whether you&apos;re building fundamentals or refining high-level patterns, Volley challenges you with relevant drills. Choose from a variety of training modes or let Volley build custom workouts for your needs.
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

        {/* Train Anytime */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="anytime-grid">
              <div style={{ backgroundColor: '#f0f4fa', borderRadius: '1.5rem', padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎾</div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '3rem', color: '#132751', lineHeight: 1 }}>10x</p>
                <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1rem', marginTop: '0.5rem' }}>more reps per training session</p>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Train Anytime, On Your Terms
                </h2>
                <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Hit the court before work, after school, or during off-hours. Volley delivers meaningful reps when a hitting partner or coach isn&apos;t available.
                </p>
                <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1rem', lineHeight: 1.7 }}>
                  Volley reinforces what you learn in lessons with your pro. Practice key shots on your own and at your own pace, with feedback that helps it stick.
                </p>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .anytime-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
