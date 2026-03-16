'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

export default function PickleballPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/choose_pickleball.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '650px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem', textTransform: 'uppercase' }}>Pickleball</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                The Objective Rating System Pickleball Has Been Waiting For
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Volley Assessments gives pickleball clubs and players the first AI-powered assessment tool — delivering objective ratings, personalized improvement plans, and better-matched competition.
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

        {/* Why Pickleball Clubs Need Assessments */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem', textAlign: 'center' }}>
              Why Pickleball Clubs Are Adding Player Assessments
            </h2>
            <p style={{ color: 'rgba(19,39,81,0.6)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
              Pickleball is the fastest-growing sport in America — but most clubs still have no objective way to rate their players.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="pb-benefits-grid">
              {[
                { title: 'Objective Player Ratings', desc: 'Replace self-reported skill levels with AI-driven assessments. Players get an accurate rating based on actual on-court performance.' },
                { title: 'Better-Matched Play', desc: 'When every member has a verified rating, you can organize leagues, ladders, and round robins that are competitive and fair.' },
                { title: 'Member Retention', desc: '83% of players train more frequently when they can track progress. Ratings give members a reason to keep coming back.' },
                { title: 'Pickleball-Specific Skills', desc: 'Assessments evaluate dinks, drives, third shot drops, volleys, returns, and transition game — the shots that matter in pickleball.' },
                { title: 'Club Differentiation', desc: 'Stand out from other facilities by offering something no one else has: a real player development system backed by AI.' },
                { title: 'Data-Driven Programming', desc: 'Use assessment data to inform clinics, group lessons, and programming. Know what your members actually need.' },
              ].map((b, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#132751', marginBottom: '0.75rem' }}>{b.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .pb-benefits-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .pb-benefits-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Skills Assessed */}
        <section style={{ backgroundColor: '#132751', padding: '5rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: 'white', marginBottom: '2.5rem', textAlign: 'center' }}>
              Pickleball Skills We Assess
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Dinks', 'Drives', 'Third Shot Drops', 'Volleys', 'Returns', 'Transition Game', 'Placement', 'Court Movement'].map(skill => (
                <span key={skill} style={{ backgroundColor: '#182F61', color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', padding: '10px 20px', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {skill}
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
