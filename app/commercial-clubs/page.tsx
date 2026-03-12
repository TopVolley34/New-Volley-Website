'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const benefits = [
  { title: 'Premium Member Experience', desc: 'Offer Volley as a premium experience through private sessions, group programming, or rentals. Many clubs charge for access or use it as a membership differentiator.' },
  { title: 'Revenue Generation', desc: 'Generate new revenue streams through pay-per-use sessions, quarterly subscriptions, or bundled memberships. Volley creates predictable, recurring income.' },
  { title: 'Junior Academies', desc: 'Incorporate Volley into junior programs for structured, data-driven development that keeps young players engaged and improving.' },
  { title: 'Adult Programming', desc: 'From beginner clinics to competitive drills, Volley adapts to every skill level — making it easy to run diverse adult programming.' },
  { title: 'Pro Support', desc: 'Volley complements your teaching pros by providing consistent, AI-driven training that reinforces lessons and extends coaching reach.' },
  { title: 'Player Onboarding', desc: 'Use Volley to onboard new members and assess skill levels quickly, helping them integrate into the right programs from day one.' },
];

const faqs = [
  { q: 'How does Volley fit into our existing programming?', a: 'Volley complements what you\'re already offering. It enhances lessons, clinics, and open court time by giving players a smart training partner that adapts to their level.' },
  { q: 'What kind of support and training do we get as a club?', a: 'We provide hands-on onboarding, training for staff, and ongoing support. You also get access to marketing materials, programming ideas, and automatic software updates.' },
  { q: 'Does it require permanent installation?', a: 'No. Volley is compact and designed to work seamlessly on a standard tennis, platform tennis, pickleball, or padel court. Setup takes just a few minutes and doesn\'t require permanent installation.' },
  { q: 'How do members pay for sessions?', a: 'Clubs have flexibility — you can offer quarterly subscriptions for regular users or pay-per-use for drop-in players. Many clubs also bundle Volley access into membership tiers.' },
];

export default function CommercialClubsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/usta-overview.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.2 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '700px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>Commercial Clubs</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Elevate Your Club&apos;s<br />Racquet Program.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '550px' }}>
                Volley can be offered as a premium experience — through private sessions, group programming, or rentals. Differentiate your club and drive new revenue.
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
                How Clubs Use Volley
              </h2>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                From revenue generation to member engagement, Volley transforms your racquet sports programming.
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

        {/* Stats */}
        <section style={{ backgroundColor: '#132751', padding: '5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }} className="stats-grid">
              {[
                { stat: '10x', label: 'More reps per training session' },
                { stat: '83%', label: 'Of users train more frequently' },
                { stat: '24/7', label: 'Remote monitoring & support' },
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

        {/* FAQ */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '3rem', textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e2e8f0', padding: '1.5rem 0' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#132751', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
