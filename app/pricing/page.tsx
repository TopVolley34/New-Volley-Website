'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const included = [
  'Volley Trainer (hardware)',
  'Delivery & install support',
  'Hands-on onboarding & staff training',
  'Real-time remote support (24/7)',
  'Monthly software updates',
  'Access to Volley app for all members',
  'Player Development Engine (PDE)',
  'Marketing materials & programming ideas',
];

const models = [
  {
    title: 'Quarterly Subscription',
    desc: 'Designed for clubs with steady users who value consistency. Generates predictable, recurring revenue.',
    features: ['Predictable recurring revenue', 'Best for regular users', 'Consistent member engagement', 'Easy budgeting for clubs'],
  },
  {
    title: 'Pay-Per-Use',
    desc: 'A great fit for clubs with casual or drop-in players. Monetize usage without requiring long-term commitment.',
    features: ['Flexible for all player types', 'No long-term commitment needed', 'Great for drop-in players', 'Low barrier to entry'],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Flexible Pricing,<br />Lasting Value
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '650px', margin: '0 auto 2.5rem' }}>
              Whether you&apos;re a club, school, or private court owner, Volley offers flexible models that deliver lasting value — backed by pro-level support, automatic updates, and no-hassle service.
            </p>
            <Link href="/contact-us"
              style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
              Talk To Sales
            </Link>
          </div>
        </section>

        {/* What's Included */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="included-grid">
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem', lineHeight: 1.1 }}>
                  Everything You Need, Included
                </h2>
                <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Every Volley package comes with comprehensive hardware, software, and support — so you can focus on delivering a great experience.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {included.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3CE97C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#132751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ color: '#132751', fontSize: '0.9rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .included-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Revenue Models */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
                Choose Your Revenue Model
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                Volley offers flexible monetization options designed to fit your venue and audience.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }} className="models-grid">
              {models.map((m, i) => (
                <div key={i} style={{ backgroundColor: '#182F61', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#3CE97C', marginBottom: '1rem' }}>{m.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{m.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {m.features.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(60,233,124,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#3CE97C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) { .models-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
