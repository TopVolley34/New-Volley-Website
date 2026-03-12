'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const specs = [
  { icon: '📱', title: 'App Controlled', desc: 'Control the trainer from your phone or smartwatch. Select drills, adjust settings, and review video — all from the Volley app.' },
  { icon: '🧠', title: 'NVIDIA Computer', desc: 'Powered by NVIDIA for real-time AI processing, ball tracking, and player analysis during every session.' },
  { icon: '📷', title: 'Multiple Cameras', desc: 'Three built-in cameras for person tracking, ball tracking, video recording, and remote maintenance diagnostics.' },
  { icon: '📶', title: 'Cellular & WiFi', desc: 'Always connected via cellular and WiFi for automatic software updates, remote monitoring, and cloud sync.' },
  { icon: '🔋', title: 'Battery Powered', desc: 'Up to 4 hours of training on a single charge. No cords required — just roll it onto the court and play.' },
  { icon: '📐', title: 'Raises Up To 87"', desc: 'Adjustable height up to 87 inches with versatile tilt angles (-38° to 56°) for every type of shot.' },
  { icon: '🔄', title: 'Spin In Any Direction', desc: 'Recreate drives, lobs, volleys, overheads, screens, returns, and specialty shots with spin in any direction.' },
  { icon: '📺', title: 'LED Billboard Display', desc: 'Built-in LED display for visual cues, drill instructions, and real-time feedback during training.' },
  { icon: '🔊', title: 'Speaker & Microphone', desc: 'Integrated audio for voice instructions, feedback, and communication during sessions.' },
  { icon: '🛡️', title: '24/7 Remote Support', desc: 'Remote monitoring and diagnostics. Our support team can virtually find problems and walk you through fixes.' },
  { icon: '🏗️', title: 'Compact & Portable', desc: 'Wheels make it portable. Store under a cover in just 3ft x 2ft. Batteries and accessories fit in 2ft x 1ft.' },
  { icon: '🔄', title: 'Automatic Updates', desc: 'The trainer is automatically enhanced with new features — keeping your experience cutting-edge.' },
];

export default function TrainerPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="trainer-hero-grid">
              <div>
                <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>The Trainer</p>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  A Patented, Revolutionary Training Tool
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  With never-before-seen features and capabilities, the Volley Trainer is the world&apos;s first AI-enabled racquet sports training system — designed for tennis, padel, pickleball, and platform tennis.
                </p>
                <Link href="/contact-us"
                  style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                  Request A Demo
                </Link>
              </div>
              <div style={{ backgroundColor: '#182F61', borderRadius: '1.5rem', padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
                <div style={{ fontSize: '6rem', marginBottom: '1.5rem' }}>🤖</div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'white', fontSize: '1.2rem', textAlign: 'center' }}>The Volley Trainer</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textAlign: 'center', marginTop: '0.5rem' }}>AI-Powered Racquet Sports Robot</p>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .trainer-hero-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Specs Grid */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
                Features & Specifications
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                Every detail of the Volley Trainer is engineered for performance, portability, and ease of use.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="specs-grid">
              {specs.map((s, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{s.icon}</div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#132751', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 1000px) { .specs-grid { grid-template-columns: repeat(3, 1fr) !important; } }
            @media (max-width: 768px) { .specs-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .specs-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Sports Supported */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              One Trainer. Four Sports.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 3rem', textAlign: 'center', lineHeight: 1.7 }}>
              Volley is a truly universal racquets simulator, serving every type of shot across all four sports.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="sports-support-grid">
              {[
                { name: 'Tennis', href: '/tennis', img: '/images/choose_tennis.webp' },
                { name: 'Padel', href: '/padel', img: '/images/choose_padel.png' },
                { name: 'Pickleball', href: '/pickleball', img: '/images/choose_pickleball.webp' },
                { name: 'Platform Tennis', href: '/platform-tennis', img: '/images/choose_platformtennis.webp' },
              ].map(s => (
                <Link key={s.name} href={s.href} style={{ position: 'relative', display: 'block', borderRadius: '1rem', overflow: 'hidden', height: '200px', textDecoration: 'none' }}>
                  <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 20%, transparent 60%)' }}></div>
                  <p style={{ position: 'absolute', bottom: '1rem', left: '1rem', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem' }}>{s.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .sports-support-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (max-width: 480px) { .sports-support-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
