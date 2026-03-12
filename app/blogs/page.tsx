'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const posts = [
  {
    title: 'Take Control of Your PTI: Track, Analyze, and Dominate',
    excerpt: 'Learn how to use Volley to keep track of your PTI stats, analyze your platform tennis performance, and create a data-driven path to improvement.',
    date: 'May 2024',
    category: 'Platform Tennis',
    featured: true,
  },
  {
    title: 'Our Journey: This is How We Volley',
    excerpt: 'A labor of love inspired by passion for paddle and driven by a background in tech. The story of how Volley went from an idea to the world\'s first AI racquet sports assessment system.',
    date: 'January 2024',
    category: 'Company',
    featured: true,
  },
  {
    title: 'Volley Named SFIA Finalist',
    excerpt: 'Volley has been recognized as a finalist by the Sports & Fitness Industry Association for innovation in racquet sports technology.',
    date: 'March 2024',
    category: 'Press',
    featured: true,
  },
  {
    title: 'How to Rate Your Pickleball Club Members',
    excerpt: 'Self-reported ratings don\'t work. Here\'s how AI-powered assessments give your pickleball club members the objective ratings they need for better competition.',
    date: 'Coming Soon',
    category: 'Pickleball',
    featured: false,
  },
  {
    title: 'Why Pickleball Clubs Are Adding Player Assessments',
    excerpt: 'The fastest-growing sport in America still lacks objective player ratings. Forward-thinking clubs are solving this with assessment technology.',
    date: 'Coming Soon',
    category: 'Pickleball',
    featured: false,
  },
  {
    title: 'What Is a Padel Rating System and Why Your Club Needs One',
    excerpt: 'Padel is early in the U.S. market — which means clubs that adopt rating systems now will define the category for years to come.',
    date: 'Coming Soon',
    category: 'Padel',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Platform Tennis': '#a855f7',
  'Company': '#5170B3',
  'Press': '#e8a838',
  'Pickleball': '#3CE97C',
  'Padel': '#3b82f6',
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              From The Minds At Volley
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '550px', margin: '0 auto' }}>
              Insights on player assessments, club management, and the future of racquet sports.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="blog-grid">
              {posts.map((post, i) => (
                <article key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #e2e8f0', opacity: post.featured ? 1 : 0.7 }}>
                  <div style={{ backgroundColor: '#132751', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'rgba(255,255,255,0.15)', fontSize: '3rem' }}>V</span>
                    {!post.featured && (
                      <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.65rem', padding: '3px 8px', borderRadius: '4px' }}>Coming Soon</span>
                    )}
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ backgroundColor: categoryColors[post.category] || '#5170B3', color: post.category === 'Pickleball' ? '#132751' : 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.65rem', padding: '3px 10px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                        {post.category}
                      </span>
                      <span style={{ color: 'rgba(19,39,81,0.4)', fontSize: '0.8rem' }}>{post.date}</span>
                    </div>
                    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#132751', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.88rem', lineHeight: 1.7 }}>{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) { .blog-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
