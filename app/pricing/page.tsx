'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              Simple Pricing, Built for Clubs
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 3rem' }}>
              Pricing scales with your club. Everything you need is included — hardware, software, support, and automatic updates.
            </p>
            <Link href="/contact-us"
              style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '16px 36px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
              Get Custom Pricing
            </Link>
          </div>
        </section>

        {/* What's Included */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '3rem', textAlign: 'center' }}>
              Everything Included
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="included-grid">
              {[
                'Volley Trainer hardware',
                'AI-powered Assessments engine',
                'Objective player ratings',
                'Personalized development paths',
                'Volley app for all members',
                'Club admin dashboard',
                'Hands-on onboarding & staff training',
                '24/7 remote monitoring & support',
                'Automatic software updates',
                'All four sports included',
                'Marketing materials & programming ideas',
                'Delivery & installation support',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', backgroundColor: '#f8fafc', borderRadius: '0.75rem' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3CE97C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#132751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span style={{ color: '#132751', fontSize: '0.9rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) { .included-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Club Size Tiers */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
              Pricing Scales With Your Club
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
              Tell us about your club and we&apos;ll provide custom pricing that fits your size and needs.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="tiers-grid">
              {[
                { name: 'Small Club', size: 'Under 200 members', desc: 'Perfect for boutique clubs and smaller facilities getting started with player assessments.' },
                { name: 'Mid-Size Club', size: '200–500 members', desc: 'The sweet spot for most clubs — full assessment capabilities and member development tools.' },
                { name: 'Large Club', size: '500+ members', desc: 'Enterprise-grade support for large facilities with high-volume assessment needs.' },
              ].map((tier, i) => (
                <div key={i} style={{ backgroundColor: '#182F61', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: 'white', marginBottom: '0.5rem' }}>{tier.name}</h3>
                  <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem' }}>{tier.size}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{tier.desc}</p>
                  <Link href="/contact-us"
                    style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, padding: '10px 24px', borderRadius: '9999px', fontSize: '0.85rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; e.currentTarget.style.borderColor = '#3CE97C'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}>
                    Get Pricing
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .tiers-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Bottom CTA */}
        <section style={{ backgroundColor: 'white', padding: '5rem 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: '#132751', marginBottom: '1rem' }}>
              Let&apos;s Find the Right Fit
            </h2>
            <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Book a demo to discuss your club, see Assessments in action, and get pricing that works for you.
            </p>
            <Link href="/contact-us"
              style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '16px 36px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#132751'}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
              onMouseDown={e => e.currentTarget.style.color = 'white'}
              onMouseUp={e => e.currentTarget.style.color = '#132751'}>
              Get a Demo
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
