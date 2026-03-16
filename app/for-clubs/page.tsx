'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

export default function ForClubsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '650px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem', textTransform: 'uppercase' }}>For Clubs</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Rated Players Mean Better Competition. Better Competition Means a Better Club.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Assessments gives your club a tool to objectively rate and develop every member — driving retention, recruitment, and competitive quality.
              </p>
              <Link href="/get-a-demo"
                style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '16px 36px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Pain → Solution */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="pain-grid">
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: '#132751', marginBottom: '2rem' }}>
                  The Problem
                </h2>
                {['Unrated members make scheduling competitive play nearly impossible', 'Mismatched competition frustrates players and drives them away', 'No objective way to track member development or program effectiveness', 'Retention challenges from lack of engagement and visible progress'].map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                    <p style={{ color: 'rgba(19,39,81,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>{p}</p>
                  </div>
                ))}
              </div>
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: '#132751', marginBottom: '2rem' }}>
                  The Solution
                </h2>
                {['Objective AI-driven ratings for every member across all racquet sports', 'Better-matched play that keeps members engaged and competing at the right level', 'Data-driven coaching insights to inform programming and lessons', 'Visible member progress that drives retention and word-of-mouth growth'].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <p style={{ color: 'rgba(19,39,81,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .pain-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
          `}</style>
        </section>

        {/* How It Works Operationally */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '3rem', textAlign: 'center' }}>
              How It Works at Your Club
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="ops-grid">
              {[
                { num: '1', title: 'Setup', desc: 'Volley is compact and portable. Roll it onto any court — tennis, pickleball, padel, or platform tennis. No permanent installation.' },
                { num: '2', title: 'Assess', desc: 'Members take a 20-minute on-court assessment. AI evaluates strokes, movement, and shot selection for an objective rating.' },
                { num: '3', title: 'Rate & Match', desc: 'Members receive ratings stored in their profile. Use ratings to create better-matched play, events, and programs.' },
                { num: '4', title: 'Grow', desc: 'Track member progress over time. Ratings drive competition quality, retention, and make your club the place to play.' },
              ].map(s => (
                <div key={s.num} style={{ backgroundColor: '#182F61', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3CE97C', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1rem', color: '#132751' }}>{s.num}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: 'white', marginBottom: '0.5rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .ops-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 500px) { .ops-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Sports Covered */}
        <section style={{ backgroundColor: 'white', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: '#132751', marginBottom: '0.75rem' }}>
              One System, Every Racquet Sport
            </h2>
            <p style={{ color: 'rgba(19,39,81,0.5)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              Pickleball, Padel, Platform Tennis, and Tennis — in one subscription.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Pickleball', 'Padel', 'Platform Tennis', 'Tennis'].map(sport => (
                <span key={sport} style={{ backgroundColor: '#f0f4fa', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.9rem', padding: '10px 24px', borderRadius: '9999px' }}>
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CTABanner variant="club" />
      </main>
      <Footer />
    </>
  );
}
