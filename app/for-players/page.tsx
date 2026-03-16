'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

export default function ForPlayersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem', textTransform: 'uppercase' }}>For Players</p>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, maxWidth: '750px', margin: '0 auto 1.5rem' }}>
              For the First Time, You Have a Roadmap.
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 3rem' }}>
              You know exactly what to work on and how fast you&apos;re improving. Volley Assessments gives you an objective rating, a gap analysis, and a clear path to getting better faster.
            </p>
            <Link href="/get-a-demo"
              style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '16px 36px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
              Ask Your Club About Volley
            </Link>
          </div>
        </section>

        {/* The Problem for Players */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem', textAlign: 'center' }}>
              The Feedback You&apos;ve Been Missing
            </h2>
            <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', lineHeight: 1.7, textAlign: 'center', marginBottom: '3rem' }}>
              Until now, there was no objective way to know how good you really are — or what&apos;s holding you back.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="feedback-grid">
              <div style={{ backgroundColor: '#f8fafc', borderRadius: '1.25rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#132751', marginBottom: '0.75rem' }}>Before Volley</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['"I think I\'m about a 3.5"', 'No idea what to practice', 'No way to track improvement', 'Mismatched matches and frustration'].map((item, i) => (
                    <li key={i} style={{ color: 'rgba(19,39,81,0.5)', fontSize: '0.95rem', padding: '0.5rem 0', borderBottom: i < 3 ? '1px solid #f1f5f9' : 'none' }}>{item}</li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: '#132751', borderRadius: '1.25rem', padding: '2rem' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#3CE97C', marginBottom: '0.75rem' }}>With Volley</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {['"I\'m a verified 3.72 — here\'s why"', 'A personalized practice plan', 'Visible progress every month', 'Better-matched, more competitive play'].map((item, i) => (
                    <li key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', padding: '0.5rem 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) { .feedback-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Assessment Output */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="output-grid">
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  What You Get
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { title: 'Your Overall Rating', desc: 'A single, objective number that represents your current level — comparable across players and trackable over time.' },
                    { title: 'Skill Breakdown', desc: 'See exactly how you perform on each shot type — forehand, backhand, volleys, serves, returns, and more.' },
                    { title: 'Gap Analysis', desc: 'Understand what\'s holding you back. Volley identifies the specific skills that will have the biggest impact on your improvement.' },
                    { title: 'Practice Recommendations', desc: 'Get targeted drills and training plans based on your assessment — so every practice session has purpose.' },
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#3CE97C', marginBottom: '0.25rem' }}>{item.title}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ backgroundColor: '#182F61', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Sample Assessment Output</p>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '4rem', color: '#3CE97C', lineHeight: 1 }}>3.72</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Overall Rating</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { skill: 'Forehand', score: 82, width: '82%' },
                    { skill: 'Backhand', score: 68, width: '68%' },
                    { skill: 'Volleys', score: 75, width: '75%' },
                    { skill: 'Serve', score: 71, width: '71%' },
                    { skill: 'Movement', score: 63, width: '63%' },
                  ].map(s => (
                    <div key={s.skill}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{s.skill}</span>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>{s.score}</span>
                      </div>
                      <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: s.width, backgroundColor: '#3CE97C', borderRadius: '3px' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .output-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: 'white', padding: '5rem 0', textAlign: 'center' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: '#132751', marginBottom: '1rem' }}>
              Ready to Know Your True Rating?
            </h2>
            <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Find a club near you that uses Volley, or tell your club about us — and get your first assessment.
            </p>
            <Link href="/get-a-demo"
              style={{ display: 'inline-block', backgroundColor: '#132751', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#132751'; e.currentTarget.style.color = 'white'; }}>
              Ask Your Club About Volley
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
