'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

export default function PadelPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/choose_padel.png)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }}></div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '650px' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem', textTransform: 'uppercase' }}>Padel</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                The First Padel Rating System in the U.S.
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Padel is early in the U.S. — and Volley is defining the category. Be the first club in your market to offer AI-powered padel assessments and objective player ratings.
              </p>
              <Link href="/contact-us"
                style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '16px 36px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Why Padel */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem', textAlign: 'center' }}>
              Why Your Padel Club Needs a Rating System
            </h2>
            <p style={{ color: 'rgba(19,39,81,0.6)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
              As padel grows, players need structure. Volley delivers the assessment and rating infrastructure to help clubs build a competitive, engaged community from day one.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="padel-benefits-grid">
              {[
                { title: 'Define the Category', desc: 'Be the first club in your area to offer padel ratings. Position yourself as the serious padel destination.' },
                { title: 'Onboard New Players', desc: 'Padel is new to most Americans. Assessments give newcomers an objective starting point and a clear improvement path.' },
                { title: 'Build Competitive Community', desc: 'Ratings enable better-matched play from day one. Create leagues and events that players actually want to join.' },
                { title: 'Padel-Specific Assessment', desc: 'Volley evaluates wall play, volleys, overheads, lobs, bandeja, and movement patterns unique to padel.' },
                { title: 'Attract Serious Players', desc: 'Data-driven development attracts the competitive players who will form the core of your padel community.' },
                { title: 'One System, All Sports', desc: 'If you also offer pickleball, tennis, or platform tennis, Volley covers everything in one subscription.' },
              ].map((b, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#132751', marginBottom: '0.75rem' }}>{b.title}</h3>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .padel-benefits-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .padel-benefits-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Skills Assessed */}
        <section style={{ backgroundColor: '#132751', padding: '5rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: 'white', marginBottom: '2.5rem', textAlign: 'center' }}>
              Padel Skills We Assess
            </h2>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Wall Play', 'Volleys', 'Overheads', 'Lobs', 'Bandeja', 'Court Movement', 'Placement', 'Glass Tactics'].map(skill => (
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
