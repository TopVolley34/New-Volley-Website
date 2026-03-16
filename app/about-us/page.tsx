'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1rem', textTransform: 'uppercase' }}>About Volley</p>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Building the Future of Racquet Sports
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              What if racquet sports had a training and rating system as engaging and data-driven as golf? That question sparked Volley.
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '2rem', textAlign: 'center' }}>Our Story</h2>
            <div style={{ color: 'rgba(19,39,81,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                John learned to play both golf and platform tennis around the age of 40. While the two sports had surprising similarities, the learning experience couldn&apos;t have been more different.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                In golf, every lesson came with a roadmap — a simulator could track progress, offer real-time feedback, and reinforce improvement. But in racquet sports, there was nothing like it. No objective ratings. No data-driven development. No way to know where you stand or what to work on.
              </p>
              <p>
                So Dan and John set out to change that — building the world&apos;s first AI-enabled racquet sports assessment and rating system. Today, Volley is used at clubs across the country, giving players and clubs the objective data they&apos;ve been missing.
              </p>
            </div>
          </div>
        </section>

        {/* Mission + Values */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '3rem', textAlign: 'center' }}>What Drives Us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="values-grid">
              {[
                { title: 'Assessments First', desc: 'We believe every player deserves objective feedback. Assessments are the core of everything we build — not an add-on.' },
                { title: 'Built for Clubs', desc: 'Clubs are the heart of racquet sports. We build tools that help clubs retain members, drive competition quality, and grow.' },
                { title: 'Made in the USA', desc: 'Our team designs, builds, tests, and ships every unit from the U.S. — ensuring quality, fast support, and close partnership with every club.' },
              ].map((v, i) => (
                <div key={i} style={{ backgroundColor: '#182F61', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#3CE97C', marginBottom: '0.75rem' }}>{v.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .values-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Team */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '3rem', textAlign: 'center' }}>The Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '800px', margin: '0 auto' }} className="team-grid">
              {[
                { name: 'John Weinlader', role: 'CEO & Chief Visionary', bio: 'Ten years ago, John found platform tennis and hasn\'t been the same since. As Volley\'s chief visionary, John sees a world where objective player ratings are the standard for every racquet sport.', edu: 'BS Engineering Science (Penn State), MBA (Northwestern)' },
                { name: 'Dan Weinlader', role: 'Co-Founder', bio: 'Dan spent his career at the crossroads of hardware and software — from designing semiconductors to creating the world\'s first AI racquet sports robot and assessment system.', edu: 'BS, MS, PhD Electrical Engineering (Penn State & Stanford)' },
                { name: 'Marek', role: 'Training Programs & Business Development', bio: 'A former professional tennis player and teaching pro, Marek designs Volley\'s assessment methodology and leads business development.', edu: 'BS Finance (University of Illinois)' },
                { name: 'Tebe', role: 'Operations, Finance & Strategy', bio: 'Tebe leads Volley\'s operations, finance, and strategy functions. As a journeyman racquet sports player, Volley helped him advance years faster than traditional training.', edu: '' },
              ].map((t, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#132751', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>{t.name.charAt(0)}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#132751', marginBottom: '0.15rem' }}>{t.name}</h3>
                  <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.75rem' }}>{t.role}</p>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>{t.bio}</p>
                  {t.edu && <p style={{ color: 'rgba(19,39,81,0.4)', fontSize: '0.78rem', fontStyle: 'italic' }}>{t.edu}</p>}
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) { .team-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        {/* Credibility */}
        <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', textAlign: 'center' }}>
            {[
              { label: 'SFIA Finalist', detail: 'Sports & Fitness Industry Association' },
              { label: 'APTA Partner', detail: 'American Platform Tennis Association' },
              { label: 'Made in USA', detail: 'Designed, built, and shipped domestically' },
            ].map((c, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#132751' }}>{c.label}</p>
                <p style={{ color: 'rgba(19,39,81,0.4)', fontSize: '0.8rem', marginTop: '0.25rem' }}>{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner variant="general" />
      </main>
      <Footer />
    </>
  );
}
