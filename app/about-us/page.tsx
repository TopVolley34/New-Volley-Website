'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const team = [
  {
    name: 'John Weinlader',
    role: 'CEO & Chief Visionary',
    bio: 'Ten years ago, John found platform tennis and hasn\'t been the same since. As Volley\'s chief visionary, John sees a world where racquet sports training is ubiquitous, always accessible, and unlocks the full potential of players and pros.',
    education: 'BS in Engineering Science from Penn State, MBA from Northwestern University',
  },
  {
    name: 'Dan Weinlader',
    role: 'Co-Founder',
    bio: 'Dan has spent his career at the crossroads of hardware and software. From designing semiconductors to creating the world\'s first AI racquet sports robot, he is driven to create products to fill a void.',
    education: 'BS in Electrical Engineering from Penn State, MS and PhD in Electrical Engineering from Stanford University',
  },
  {
    name: 'Marek',
    role: 'Training Programs & Business Development',
    bio: 'A former professional tennis player and teaching pro, Marek designs Volley\'s training programs and leads business development. He also remains undefeated in all intercompany play at Volley.',
    education: 'BS in Finance from The University of Illinois',
  },
  {
    name: 'Tebe',
    role: 'Operations, Finance & Strategy',
    bio: 'Tebe leads Volley\'s Operations, Finance and Strategy functions. As a journeyman racquet sports player, Volley has helped him advance his play years faster than traditional training alone.',
    education: '',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '6rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>About Us</p>
              <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Revolutionizing Racquet Sports
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7 }}>
                What if racquet sports had a training system as engaging and data-driven as golf? That question sparked an idea — and Volley was born.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '2rem', textAlign: 'center' }}>
              Our Story
            </h2>
            <div style={{ color: 'rgba(19,39,81,0.7)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                John learned to play both golf and platform tennis around the age of 40. While the two sports had surprising similarities, the learning experience between them couldn&apos;t have been more different.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                In golf, every lesson came with a roadmap — a simulator could track progress, offer real-time stroke feedback, and reinforce improvement. But in racquet sports, there was nothing like it. The contrast was striking.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                That realization sparked an idea: what if racquet sports had a training system as engaging and data-driven as golf? They realized that vision technology and AI could power a dynamic racquet sports trainer.
              </p>
              <p>
                So Dan and John set out to change the game — building the world&apos;s first AI-enabled racquet sports training system. Today, Volley is used at clubs across the country, helping players of every level improve faster with purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'white', marginBottom: '3rem', textAlign: 'center' }}>
              What Drives Us
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="values-grid">
              {[
                { title: 'Built In The USA', desc: 'Volley is headquartered in the U.S., where our team builds, tests, and ships every unit — ensuring fast service, high quality, and close support from day one.' },
                { title: 'Passionate Players', desc: 'Our team is made up of passionate players, seasoned engineers, and experienced coaches who live and breathe racquet sports.' },
                { title: 'Innovation First', desc: 'From AI-powered assessments to real-time shot tracking, we push the boundaries of what\'s possible in racquet sports training.' },
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
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '3rem', textAlign: 'center' }}>
              Meet The Team
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '900px', margin: '0 auto' }} className="team-grid">
              {team.map((t, i) => (
                <div key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#132751', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.2rem' }}>{t.name.charAt(0)}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#132751', marginBottom: '0.25rem' }}>{t.name}</h3>
                  <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem' }}>{t.role}</p>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>{t.bio}</p>
                  {t.education && <p style={{ color: 'rgba(19,39,81,0.45)', fontSize: '0.8rem', fontStyle: 'italic' }}>{t.education}</p>}
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 600px) { .team-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
