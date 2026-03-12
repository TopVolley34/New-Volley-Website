'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const supportOptions = [
  {
    icon: '💬',
    title: 'In-App Chat',
    desc: 'Get live assistance directly through the Volley app. Our support team is always available to help.',
    action: 'Open The App',
    href: '#',
  },
  {
    icon: '📧',
    title: 'Email Support',
    desc: 'Send us an email and we\'ll get back to you as quickly as possible with a solution.',
    action: 'Email Us',
    href: 'mailto:support@getvolley.com',
  },
  {
    icon: '📚',
    title: 'FAQs',
    desc: 'Find answers to common questions about Volley, the trainer, and how it works.',
    action: 'View FAQs',
    href: '/faqs',
  },
];

const resources = [
  { title: 'Getting Started Guide', desc: 'New to Volley? Learn how to set up your trainer and start your first session.', href: '/getstarted' },
  { title: 'App Download', desc: 'Download the Volley Racquet app for iOS or Android to control your trainer.', href: '#' },
  { title: 'Trainer Setup', desc: 'Step-by-step instructions for setting up and storing your Volley Trainer.', href: '/trainer' },
  { title: 'Club Onboarding', desc: 'Resources for clubs getting started with Volley — staff training, programming ideas, and more.', href: '/commercial-clubs' },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              We&apos;re Here To Help
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Volley support is always available. Reach us through the app, email, or browse our resources below.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="support-grid">
              {supportOptions.map((opt, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{opt.icon}</div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: '#132751', marginBottom: '0.75rem' }}>{opt.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{opt.desc}</p>
                  <Link href={opt.href}
                    style={{ display: 'inline-block', backgroundColor: '#132751', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, padding: '10px 24px', borderRadius: '9999px', fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#132751'; e.currentTarget.style.color = 'white'; }}>
                    {opt.action}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .support-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Resources */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '3rem', textAlign: 'center' }}>
              Helpful Resources
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }} className="resources-grid">
              {resources.map((r, i) => (
                <Link key={i} href={r.href}
                  style={{ backgroundColor: '#182F61', borderRadius: '1rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#3CE97C'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: '0.5rem' }}>{r.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) { .resources-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
