'use client';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ── HERO — Lead with Assessments, Dual CTA ────────────────────────────────────
function Hero() {
  return (
    <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '7rem 0 6rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/contact_background.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08 }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
          Introducing Volley Assessments
        </p>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', color: 'white', lineHeight: 1.1, maxWidth: '800px', margin: '0 auto 1.5rem' }}>
          Know Your Game.<br />Grow Your Club.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 3rem' }}>
          The first objective rating and assessment system for pickleball, padel, platform tennis, and tennis. Better ratings mean better competition. Better competition means better clubs.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/for-clubs"
            style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '16px 36px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
            I&apos;m a Club
          </Link>
          <Link href="/for-players"
            style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '16px 36px', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#3CE97C'; e.currentTarget.style.color = '#3CE97C'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white'; }}>
            I&apos;m a Player
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── ASSESSMENT VALUE PROP ──────────────────────────────────────────────────────
function AssessmentValue() {
  const steps = [
    { num: '01', title: 'Take an Assessment', desc: 'Complete a quick, on-court session. Volley\'s AI evaluates your strokes, placement, and court awareness.' },
    { num: '02', title: 'Get Your Rating', desc: 'Receive an objective, data-driven rating that shows exactly where you stand — no guesswork, no bias.' },
    { num: '03', title: 'See Your Roadmap', desc: 'Get a personalized development path showing what to work on and how to improve faster.' },
  ];
  return (
    <section style={{ backgroundColor: 'white', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem' }}>
            How Assessments Work
          </h2>
          <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '1.05rem', maxWidth: '550px', margin: '0 auto', lineHeight: 1.7 }}>
            Three steps to objective player development — for clubs and players alike.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }} className="steps-grid">
          {steps.map(s => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#132751', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                <span style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '1.2rem' }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.15rem', color: '#132751', marginBottom: '0.75rem' }}>{s.title}</h3>
              <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/assessments"
            style={{ display: 'inline-block', backgroundColor: '#132751', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#132751'; e.currentTarget.style.color = 'white'; }}>
            Learn More About Assessments
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .steps-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </section>
  );
}

// ── DUAL VALUE PROP — Clubs vs Players ─────────────────────────────────────────
function DualValue() {
  return (
    <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }} className="dual-grid">
          <div style={{ backgroundColor: '#182F61', borderRadius: '1.5rem', padding: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>For Clubs</p>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
              Rated players mean better competition. Better competition means a better club.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Assessments gives clubs a tool to objectively rate and develop members. Better-rated, more competitive members stay longer, recruit others, and elevate your club.
            </p>
            <Link href="/for-clubs"
              style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '12px 28px', borderRadius: '9999px', fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'white'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#3CE97C'}>
              Learn More
            </Link>
          </div>
          <div style={{ backgroundColor: '#182F61', borderRadius: '1.5rem', padding: '3rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>For Players</p>
            <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
              For the first time, you have a roadmap. You know exactly what to work on.
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Players have never had objective feedback on their game before. Assessments gives you a rating, a gap analysis, and a clear path to getting better faster.
            </p>
            <Link href="/for-players"
              style={{ display: 'inline-block', backgroundColor: 'transparent', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '12px 28px', borderRadius: '9999px', fontSize: '0.9rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.3)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#3CE97C'; e.currentTarget.style.color = '#3CE97C'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'white'; }}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .dual-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ── SPORT CREDIBILITY SIGNALS ──────────────────────────────────────────────────
function SportSignals() {
  const sports = [
    { name: 'Pickleball', href: '/pickleball', img: '/images/choose_pickleball.webp', tag: 'Growing Fast' },
    { name: 'Padel', href: '/padel', img: '/images/choose_padel.png', tag: 'New in US' },
    { name: 'Platform Tennis', href: '#', img: '/images/choose_platformtennis.webp', tag: 'Established' },
    { name: 'Tennis', href: '#', img: '/images/choose_tennis.webp', tag: 'Classic' },
  ];
  return (
    <section style={{ backgroundColor: 'white', padding: '5rem 0' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: '#132751', marginBottom: '0.75rem', textAlign: 'center' }}>
          Assessments for Every Racquet Sport
        </h2>
        <p style={{ color: 'rgba(19,39,81,0.5)', fontSize: '0.95rem', textAlign: 'center', marginBottom: '3rem' }}>
          One system. Four sports. Objective ratings across the board.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="sport-signals-grid">
          {sports.map(s => (
            <Link key={s.name} href={s.href}
              style={{ position: 'relative', display: 'block', borderRadius: '1rem', overflow: 'hidden', height: '220px', textDecoration: 'none' }}>
              <img src={s.img} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(19,39,81,0.9) 15%, rgba(19,39,81,0.1) 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                <span style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.tag}</span>
                <p style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.05rem', margin: '0.25rem 0 0' }}>{s.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .sport-signals-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .sport-signals-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ── SOCIAL PROOF ───────────────────────────────────────────────────────────────
const partners = [
  { name: 'Boston Pickle Club', src: '/boston-pbc.png' },
  { name: 'Ultra', src: '/LOGO_ULTRA_EPS-01.png' },
  { name: 'RCW Athletic Club', src: '/RCW-logo.png' },
  { name: 'Kingsway Tennis Club', src: '/kingswway.png' },
  { name: 'Fox Chapel Racquet Club', src: '/fox-chapel.png' },
  { name: 'Padel9', src: '/padel9.jpeg' },
  { name: 'Tempo Padel', src: '/TempoPadel_BlackLogo.png' },
  { name: 'Padel39', src: '/Padel39.png' },
  { name: 'APTA', src: '/APTA-images.jpeg' },
  { name: 'The Pad Toronto', src: '/ThePadToronto_Colored_Logo.png' },
];

function SocialProof() {
  const allPartners = [...partners, ...partners];
  return (
    <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
      <div className="container">
        <p style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', color: 'rgba(19,39,81,0.4)', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Trusted by clubs across the country
        </p>
      </div>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div className="marquee-track">
          {allPartners.map((p, i) => (
            <div key={i} className="marquee-card">
              <img src={p.src} alt={p.name} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track { display: flex; gap: 1rem; animation: marquee-scroll 30s linear infinite; width: max-content; }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-card { flex-shrink: 0; width: 180px; height: 80px; display: flex; align-items: center; justify-content: center; padding: 1rem; }
        .marquee-card img { max-height: 45px; max-width: 120px; object-fit: contain; }
        @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}

// ── TESTIMONIAL HIGHLIGHT ──────────────────────────────────────────────────────
function TestimonialHighlight() {
  return (
    <section style={{ backgroundColor: '#132751', padding: '5rem 0' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <svg width="48" height="40" viewBox="0 0 38 32" fill="none" style={{ margin: '0 auto 1.5rem', display: 'block' }}>
          <path d="M21.2537 15.2851L21.2537 32L38 32L38 15.2851L27.2279 15.2851C27.2279 8.91758 30.4967 4.46154 37.0345 1.52747e-06L30.3448 1.52747e-06C24.0148 3.73626 21.2537 8.91758 21.2537 15.2851Z" fill="#3CE97C"/>
          <path d="M0 15.2851L0 32L16.7463 32L16.7463 15.2851L6.02463 15.2851C6.02463 8.91758 9.14286 4.46154 15.6207 0L8.93103 0C2.75369 3.73626 0 8.91758 0 15.2851Z" fill="#3CE97C"/>
        </svg>
        <p style={{ color: 'white', fontSize: 'clamp(1rem, 2vw, 1.2rem)', lineHeight: 1.8, marginBottom: '1.5rem', fontStyle: 'italic' }}>
          &ldquo;Volley is the most advanced training tool for racquet sports that I&apos;ve ever seen, and has the ability to revolutionize racquet sports for players, pros and programs all over the world.&rdquo;
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
          <img src="/images/ana.webp" alt="Ana Marija Zubori" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
          <div style={{ textAlign: 'left' }}>
            <p style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>Ana Marija Zubori</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: '0.15rem 0 0' }}>2X APTA National Champion</p>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/customer-success-stories"
            style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.05em' }}
            onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
            onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
            Read Customer Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── FINAL CTA ──────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#080F20' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/contact_background.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }}></div>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'white', maxWidth: '650px', margin: '0 auto 1rem', lineHeight: 1.2 }}>
          Ready to see Assessments in action?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Book a demo to see how objective ratings can transform your club&apos;s racquet sports program.
        </p>
        <Link href="/get-a-demo"
          style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#080F20', fontFamily: 'Montserrat, sans-serif', fontWeight: 800, padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1rem', textDecoration: 'none', letterSpacing: '0.05em', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'white'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; }}>
          GET A DEMO
        </Link>
      </div>
    </section>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AssessmentValue />
        <DualValue />
        <SportSignals />
        <SocialProof />
        <TestimonialHighlight />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
