'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const benefits = [
  { title: 'Member Engagement', desc: 'Give members a reason to book more court time with an interactive, data-driven training experience that keeps them coming back.' },
  { title: 'Coaching Support', desc: 'Volley extends your teaching pros\' reach — members can practice between lessons with personalized drills that reinforce instruction.' },
  { title: 'Player Development', desc: 'The Player Development Engine provides structured training paths for every level, from beginners to competitive players.' },
  { title: 'Easy Integration', desc: 'Volley fits seamlessly into existing court schedules. No permanent installation required — just roll it onto any court and start training.' },
  { title: 'All Racquet Sports', desc: 'One system for tennis, padel, pickleball, and platform tennis. Serve your entire membership with a single investment.' },
  { title: 'Data & Insights', desc: 'Track member engagement, usage patterns, and development progress with detailed analytics and reporting.' },
];

export default function MemberOwnedClubsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/Red_Rock--29.1200x674-2.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Member-Owned Clubs</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Enhance Your Member<br />Experience.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '550px' }}>
                Give your members access to the most advanced racquet sports training system available. Volley delivers personalized development for every skill level.
              </p>
              <Link href="/contact-us"
                style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                Schedule A Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
                Why Member-Owned Clubs Choose Volley
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                Volley provides a modern, scalable approach to player development that enhances the member experience.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#132751', marginBottom: '0.75rem' }}>{b.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .benefits-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .benefits-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* PDE Section */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="pde-grid">
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', lineHeight: 1.1 }}>
                  The Player Development Engine
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Volley recommends drills, lessons, and clinics tailored to each player&apos;s development profile — generated through the PDE. This gives coaches clearer guidance, boosts player engagement, and helps clubs provide a high-quality development experience with less effort.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {['AI-Powered Player Assessment', 'Personalized Training Paths', 'Progress Tracking & Insights', 'Coach & Staff Reporting'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3CE97C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#132751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ backgroundColor: '#182F61', borderRadius: '1.5rem', padding: '3rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '3rem', color: '#3CE97C', lineHeight: 1 }}>83%</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '0.75rem', marginBottom: '2rem' }}>of users train more frequently when they can track progress</p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '3rem', color: '#3CE97C', lineHeight: 1 }}>10x</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '0.75rem' }}>more reps per training session with Volley</p>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .pde-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
