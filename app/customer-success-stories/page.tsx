'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const stories = [
  {
    club: 'Westmoreland Country Club',
    location: 'Wilmette, IL',
    sport: 'Platform Tennis',
    quote: 'Volley is the assistant that pros and players need to uplevel their training. When I was sidelined for an injury, Volley ensured I could continue supporting members — including setting the system to a variety of shots catered to each player\'s level, while also evaluating their time on the court after.',
    person: 'Teddy Bouquemont',
    role: 'Head Pro',
    img: '/images/teddy.webp',
    results: ['Continued member development during coaching injury', 'Customized training by player level', 'Post-session performance evaluation'],
  },
  {
    club: 'PADELphia',
    location: 'Philadelphia, PA',
    sport: 'Padel',
    quote: 'As Padel Tennis gains traction in the U.S., Volley allows us to support new players with a system that can help them customize their practice and get the most of their time on the court.',
    person: 'Scott Grote',
    role: 'Certified Padel Pro & Owner',
    img: '/images/scott.webp',
    results: ['Onboarded new padel players faster', 'Customized practice for every skill level', 'Maximized court time value'],
  },
  {
    club: 'New Canaan Country Club',
    location: 'New Canaan, CT',
    sport: 'Platform Tennis',
    quote: 'Volley is the most advanced training tool for racquet sports that I\'ve ever seen, and has the ability to revolutionize racquet sports for players, pros and programs all over the world.',
    person: 'Ana Marija Zubori',
    role: '2X APTA National Champion & Director of Paddle',
    img: '/images/ana.webp',
    results: ['World-class player endorsement', 'Enhanced club programming', 'Player development at every level'],
  },
];

export default function CustomerSuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              Customer Stories
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              See how clubs and players across the country are using Volley Assessments to drive better competition, retention, and player development.
            </p>
          </div>
        </section>

        {/* Stories */}
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            {stories.map((story, i) => (
              <div key={i} style={{ marginBottom: '3rem', backgroundColor: '#f8fafc', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <div style={{ backgroundColor: '#132751', padding: '1.5rem 2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'white', marginBottom: '0.15rem' }}>{story.club}</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{story.location}</p>
                  </div>
                  <span style={{ backgroundColor: 'rgba(60,233,124,0.15)', color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem', padding: '5px 14px', borderRadius: '9999px' }}>
                    {story.sport}
                  </span>
                </div>
                <div style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                    <svg width="40" height="32" viewBox="0 0 38 32" fill="none" style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                      <path d="M21.2537 15.2851L21.2537 32L38 32L38 15.2851L27.2279 15.2851C27.2279 8.91758 30.4967 4.46154 37.0345 1.52747e-06L30.3448 1.52747e-06C24.0148 3.73626 21.2537 8.91758 21.2537 15.2851Z" fill="#3CE97C"/>
                      <path d="M0 15.2851L0 32L16.7463 32L16.7463 15.2851L6.02463 15.2851C6.02463 8.91758 9.14286 4.46154 15.6207 0L8.93103 0C2.75369 3.73626 0 8.91758 0 15.2851Z" fill="#3CE97C"/>
                    </svg>
                    <p style={{ color: 'rgba(19,39,81,0.7)', fontSize: '1rem', lineHeight: 1.8, fontStyle: 'italic' }}>&ldquo;{story.quote}&rdquo;</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <img src={story.img} alt={story.person} style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#132751' }}>{story.person}</p>
                      <p style={{ color: 'rgba(19,39,81,0.5)', fontSize: '0.8rem' }}>{story.role}</p>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem' }}>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem', color: 'rgba(19,39,81,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Results</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {story.results.map((r, j) => (
                        <span key={j} style={{ backgroundColor: 'rgba(60,233,124,0.08)', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.75rem', padding: '6px 14px', borderRadius: '9999px', border: '1px solid rgba(60,233,124,0.2)' }}>
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <CTABanner variant="club" />
      </main>
      <Footer />
    </>
  );
}
