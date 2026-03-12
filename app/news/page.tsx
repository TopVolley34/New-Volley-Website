'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const newsItems = [
  {
    date: 'March 2025',
    title: 'Volley Launches Apple Watch Support',
    desc: 'Control your Volley trainer directly from your wrist. Start drills, adjust settings, and track sessions — all from Apple Watch.',
    category: 'Product Update',
  },
  {
    date: 'February 2025',
    title: 'Release 3.4 — Multi-Shot Workouts Redesign',
    desc: 'Updated the Multi-Shot Workouts and My Workouts pages to simplify navigation and make the workout-creating process smoother.',
    category: 'Product Update',
  },
  {
    date: 'January 2025',
    title: 'Volley Expands to Padel Market',
    desc: 'With padel growing rapidly in the U.S., Volley now offers comprehensive padel-specific training programs, drills, and assessments.',
    category: 'Company News',
  },
  {
    date: 'December 2024',
    title: 'Player Development Engine Launch',
    desc: 'Introducing the PDE — a systematic, scalable approach to player development combining AI-driven assessments and personalized training paths.',
    category: 'Product Update',
  },
  {
    date: 'November 2024',
    title: 'Lock Screen Controls for iPhone',
    desc: 'Now control your Volley trainer from your iPhone lock screen. Quick access to pause, play, and adjust without unlocking your phone.',
    category: 'Product Update',
  },
  {
    date: 'October 2024',
    title: 'Volley Featured in TechCrunch',
    desc: 'TechCrunch highlights Volley\'s AI-enabled ball machine as a revolutionary approach to racquet sports training and simulation.',
    category: 'Press',
  },
  {
    date: 'September 2024',
    title: 'Social Sharing — Share Your Workouts',
    desc: 'Users now have the ability to share their workouts with friends in the Volley app. Compare results and challenge each other.',
    category: 'Product Update',
  },
  {
    date: 'August 2024',
    title: 'APTA Partnership Announcement',
    desc: 'Volley partners with the American Platform Tennis Association to bring AI-powered training to platform tennis communities nationwide.',
    category: 'Partnership',
  },
];

const categoryColors: Record<string, string> = {
  'Product Update': '#3CE97C',
  'Company News': '#5170B3',
  'Press': '#e8a838',
  'Partnership': '#a855f7',
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              News & Updates
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Stay up to date with the latest at Volley — product releases, company news, and press coverage.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="news-grid">
              {newsItems.map((item, i) => (
                <article key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', padding: '2rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ backgroundColor: categoryColors[item.category] || '#5170B3', color: item.category === 'Product Update' ? '#132751' : 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.75rem', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.category}
                    </span>
                    <span style={{ color: 'rgba(19,39,81,0.4)', fontSize: '0.85rem' }}>{item.date}</span>
                  </div>
                  <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#132751', marginBottom: '0.75rem', lineHeight: 1.3 }}>{item.title}</h2>
                  <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .news-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
