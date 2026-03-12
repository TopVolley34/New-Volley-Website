'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';

const faqs = [
  {
    category: 'General',
    questions: [
      { q: 'What is Volley?', a: 'Volley is a truly "universal" racquets simulator, with the ability to serve every type of shot in Tennis, Padel, Pickleball, and Platform Tennis. It\'s the world\'s first AI-enabled racquet sports training system.' },
      { q: 'How is Volley different from a traditional ball machine?', a: 'Volley adapts in real time using AI. It creates dynamic, game-based drills tailored to your level — not just static feeds. Every session evolves based on your performance data. Unlike traditional ball machines that simply launch balls at varying speeds, Volley leverages AI and vision software to collect data as you play, learn your skill level, and simulate live gameplay.' },
      { q: 'What sports does Volley support?', a: 'Volley supports Tennis, Padel, Pickleball, and Platform Tennis. One system covers all four sports with sport-specific drills, assessments, and training programs.' },
      { q: 'Can it be used for group/team training?', a: 'Yes! Volley supports small group rotations and team sessions, making it ideal for college or high school teams with limited coaching bandwidth, as well as club group programming.' },
    ],
  },
  {
    category: 'The Trainer',
    questions: [
      { q: 'How do you control it?', a: 'Simple — with your phone or smartwatch. Anyone can download the Volley Racquet app from the Apple or Android stores. Go to getvolley.com/getstarted for a link.' },
      { q: 'What about space and storage?', a: 'Volley is designed to have a small footprint. The trainer can be stored outside under a cover — all you need is a 3ft x 2ft space. The batteries, charger, balls, and crates all easily fit in a 2ft x 1ft space.' },
      { q: 'How long does the battery last?', a: 'The Volley Trainer is battery powered and provides up to 4 hours of training on a single charge. No cords required — just roll it onto the court and play.' },
      { q: 'What kind of shots can it produce?', a: 'With an adjustable height of up to 87 inches and versatile tilt angles (-38° to 56°), Volley can recreate drives, lobs, volleys, overheads, screens, returns, and specialty shots with spin in any direction.' },
    ],
  },
  {
    category: 'For Clubs',
    questions: [
      { q: 'How does Volley fit into our existing programming?', a: 'Volley complements what you\'re already offering. It enhances lessons, clinics, and open court time by giving players a smart training partner that adapts to their level.' },
      { q: 'What kind of support do we get as a club?', a: 'We provide hands-on onboarding, training for staff, and ongoing support. You also get access to marketing materials, programming ideas, and automatic software updates. Volley support is available 24/7 via in-app chat.' },
      { q: 'Does it require permanent installation?', a: 'No. Volley is compact and designed to work seamlessly on a standard tennis, platform tennis, pickleball, or padel court. Setup takes just a few minutes and doesn\'t require permanent installation.' },
      { q: 'How can we monetize Volley at our club?', a: 'Clubs have flexibility — you can offer quarterly subscriptions for regular users or pay-per-use for drop-in players. Many clubs also bundle Volley access into membership tiers, use it for junior academies, or offer it as a premium experience.' },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #e2e8f0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#132751', paddingRight: '1rem' }}>{q}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M5 8l5 5 5-5" stroke="#132751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div style={{ paddingBottom: '1.25rem' }}>
          <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              Frequently Asked Questions
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Everything you need to know about Volley, the trainer, and how it works for players and clubs.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            {faqs.map((section, i) => (
              <div key={i} style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#132751', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {section.category}
                </h2>
                {section.questions.map((faq, j) => (
                  <FAQItem key={j} q={faq.q} a={faq.a} />
                ))}
              </div>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
