'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const posts = [
  {
    title: 'Our Journey: This is How We Volley',
    excerpt: 'A labor of love inspired by passion for paddle and driven by a background in tech. Learn how Volley went from an idea to the world\'s first AI racquet sports robot.',
    date: 'January 2024',
    category: 'Company',
  },
  {
    title: 'Transform Your Platform Tennis Training with Serve & Volley',
    excerpt: 'Enhance your platform tennis skills with the Serve & Volley feature, using advanced AI to boost your performance on the court.',
    date: 'February 2024',
    category: 'Training Tips',
  },
  {
    title: 'Repetition Made Easy for Tennis and Platform Tennis with Volley',
    excerpt: 'Discover how Volley helps you get the reps you need — delivering precise, repeatable shots for Tennis, Platform Tennis, Padel, and Pickleball.',
    date: 'March 2024',
    category: 'Training Tips',
  },
  {
    title: 'Volley Setting Strategies: A Playbook for Every Level',
    excerpt: 'A comprehensive guide for novice and seasoned racquet sports players, highlighting how Volley serves as a training tool for all types of players.',
    date: 'April 2024',
    category: 'Strategy',
  },
  {
    title: 'Take Control of Your PTI: Track, Analyze, and Dominate',
    excerpt: 'Learn how to use the Volley app to keep track of your PTI stats, analyze your performance, and create a data-driven path to improvement.',
    date: 'May 2024',
    category: 'Platform Tennis',
  },
  {
    title: 'The Future of AI in Racquet Sports Training',
    excerpt: 'How artificial intelligence is transforming the way players train, practice, and improve in tennis, padel, pickleball, and platform tennis.',
    date: 'June 2024',
    category: 'Technology',
  },
];

const categoryColors: Record<string, string> = {
  'Company': '#5170B3',
  'Training Tips': '#3CE97C',
  'Strategy': '#e8a838',
  'Platform Tennis': '#a855f7',
  'Technology': '#3b82f6',
};

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              From The Minds At Volley
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Insights, training tips, and stories from the Volley team — helping you get the most out of your racquet sports experience.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="blog-grid">
              {posts.map((post, i) => (
                <article key={i} style={{ backgroundColor: '#f8fafc', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                  <div style={{ backgroundColor: '#132751', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'rgba(255,255,255,0.2)', fontSize: '3rem' }}>V</span>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ backgroundColor: categoryColors[post.category] || '#5170B3', color: post.category === 'Training Tips' ? '#132751' : 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.7rem', padding: '3px 10px', borderRadius: '9999px', textTransform: 'uppercase' }}>
                        {post.category}
                      </span>
                      <span style={{ color: 'rgba(19,39,81,0.4)', fontSize: '0.8rem' }}>{post.date}</span>
                    </div>
                    <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#132751', marginBottom: '0.75rem', lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>{post.excerpt}</p>
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
