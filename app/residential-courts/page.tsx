'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const features = [
  { title: 'Elite Experience At Home', desc: 'Get the same intelligent Player Development Engine used at elite clubs — now for your personal court.' },
  { title: 'All Four Sports', desc: 'Tennis, padel, pickleball, and platform tennis — one system supports every racquet sport on your court.' },
  { title: 'App Controlled', desc: 'Control everything from your phone or smartwatch. Select drills, adjust settings, and track your progress effortlessly.' },
  { title: 'Battery Powered', desc: 'Up to 4 hours of training on a single charge. No cords, no hassle — just roll it onto the court and play.' },
  { title: 'Compact & Portable', desc: 'Volley is designed to have a small footprint. Store it under a cover in just a 3ft x 2ft space.' },
  { title: '24/7 Remote Support', desc: 'Volley monitors your system remotely and provides 24/7 support. Software updates happen automatically.' },
];

export default function ResidentialCourtsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/Private Tennis Court.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Residential Courts</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Pro-Level Training<br />On Your Court.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '550px' }}>
                Get the same elite experience trusted by top facilities — now for your personal court. Train on your schedule with AI-powered development.
              </p>
              <Link href="/contact-us"
                style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                Request Info
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
                Everything You Need At Home
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                Volley brings the full club experience to your personal court with zero compromise on quality or capability.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="features-grid">
              {features.map((f, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#132751', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .features-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .features-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Stats */}
        <section style={{ backgroundColor: '#132751', padding: '5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }} className="stats-grid">
              {[
                { stat: '10x', label: 'More reps per training session' },
                { stat: '83%', label: 'Of users train more frequently' },
                { stat: '4hrs', label: 'Battery life per charge' },
              ].map((s, i) => (
                <div key={i}>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '3.5rem', color: '#3CE97C', lineHeight: 1 }}>{s.stat}</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '0.5rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) { .stats-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
