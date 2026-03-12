'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CTABanner from './components/CTABanner';

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ backgroundColor: '#132751', marginTop: '90px', height: '500px', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1200px', height: '100%', display: 'grid', gridTemplateColumns: '40% 60%' }} className="hero-grid">

        {/* Left text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 3rem 3rem 5rem' }} className="hero-left">
          <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '54px', color: 'white', lineHeight: '74px', marginBottom: '1rem' }}>
            LEVEL UP YOUR GAME
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '2rem', lineHeight: 1.6 }}>
            This Is What Training In Racquets Should Look Like
          </p>
          <div>
            <Link href="/getstarted"
              style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 500, padding: '12px 30px', borderRadius: '24px', fontSize: '18px', textDecoration: 'none', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'white')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3CE97C')}>
              Download The App
            </Link>
          </div>
        </div>

        {/* Right video */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          >
            <source src="/Website Homepage - Hero Video (5).mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-left { padding: 2.5rem 2rem !important; }
          .hero-left h1 { font-size: 36px !important; line-height: 46px !important; }
        }
      `}</style>
    </section>
  );
}

// ── POWERED BY VOLLEY ─────────────────────────────────────────────────────────
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

function PoweredBy() {
  const allPartners = [...partners, ...partners];
  return (
    <section style={{ backgroundColor: 'white', padding: '3rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#132751', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Powered By Volley
        </h2>
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
        .marquee-track {
          display: flex;
          gap: 1rem;
          animation: marquee-scroll 30s linear infinite;
          width: max-content;
        }
        .marquee-track:hover { animation-play-state: paused; }
        .marquee-card {
          flex-shrink: 0;
          width: 180px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.25rem;
        }
        .marquee-card img { max-height: 50px; max-width: 130px; object-fit: contain; }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

// ── IMPROVE FASTER ────────────────────────────────────────────────────────────
function ImproveFaster() {
  return (
    <section style={{ backgroundColor: '#132751', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="improve-grid">
          <div>
            <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Improve Faster,<br />With Purpose
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Your performance data, turned into progress. With the Volley Player Development Engine this isn&apos;t just training—it&apos;s a continuous path to improvement.
            </p>
            <Link href="/tennis"
              style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 800, padding: '0.9rem 2rem', borderRadius: '9999px', fontSize: '0.95rem', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'white')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3CE97C')}>
              Choose Your Sport
            </Link>
          </div>
          <div style={{ borderRadius: '1rem', overflow: 'hidden', aspectRatio: '16/9' }}>
            <video controls style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
              <source src="/VolleyPlayerDevelopment.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .improve-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </section>
  );
}

// ── CHOOSE YOUR SPORT ─────────────────────────────────────────────────────────
const sports = [
  { name: 'Tennis', href: '/tennis', img: '/images/choose_tennis.webp' },
  { name: 'Padel', href: '/padel', img: '/images/choose_padel.png' },
  { name: 'Pickleball', href: '/pickleball', img: '/images/choose_pickleball.webp' },
  { name: 'Platform Tennis', href: '/platform-tennis', img: '/images/choose_platformtennis.webp' },
];

function ChooseYourSport() {
  const [hovered, setHovered] = useState<number>(0);
  return (
    <section style={{ backgroundColor: 'white', padding: '5rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#132751', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Choose Your Sport
        </h2>
        <p style={{ textAlign: 'center', color: 'rgba(19,39,81,0.6)', fontSize: '1rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
          See how players, coaches, and clubs use Volley to personalize training, simplify programming, and drive development at every level of the game.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', height: '420px' }}>
          {sports.map((sport, i) => (
            <Link
              key={sport.name}
              href={sport.href}
              onMouseEnter={() => setHovered(i)}
              style={{
                flex: hovered === i ? '2 1 0' : '1 1 0',
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                textDecoration: 'none',
                transition: 'flex 0.5s ease',
                display: 'block',
                minWidth: 0,
              }}
            >
              <img src={sport.img} alt={sport.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', top: '1rem', right: '1rem',
                width: '36px', height: '36px', borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                backgroundColor: '#3d6fc4', padding: '0.85rem 1.25rem',
                opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s ease',
              }}>
                <span style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>{sport.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── BUILT FOR CLUBS ───────────────────────────────────────────────────────────
const venues = [
  { title: 'Commercial Clubs', href: '/commercial-clubs', img: '/usta-overview.webp' },
  { title: 'Member-Owned Clubs', href: '/member-owned-clubs', img: '/Red_Rock--29.1200x674-2.webp' },
  { title: 'Residential Courts', href: '/residential-courts', img: '/Private Tennis Court.webp' },
];

function BuiltForClubs() {
  return (
    <section style={{ backgroundColor: '#182F61', padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '0.75rem', lineHeight: 1.1 }}>
          Built for Clubs.<br />Loved by Players.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '3rem', fontSize: '1rem' }}>
          Learn More About Volley at Your Club Below:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="venues-grid">
          {venues.map(v => (
            <Link key={v.title} href={v.href}
              style={{ position: 'relative', display: 'block', borderRadius: '1.25rem', overflow: 'hidden', height: '280px', textDecoration: 'none' }}
              className="venue-card">
              <img src={v.img} alt={v.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                className="venue-img"
                onError={e => { (e.target as HTMLImageElement).src = `https://placehold.co/600x280/132751/3CE97C?text=${encodeURIComponent(v.title)}`; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.1) 70%)' }}></div>
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
                <h3 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1.2rem' }}>{v.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .venues-grid { grid-template-columns: 1fr !important; } }
        .venue-card:hover .venue-img { transform: scale(1.05); }
      `}</style>
    </section>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "Volley is the assistant that pros and players need to uplevel their training. When I was sidelined for an injury, Volley ensured I could continue supporting members - including setting the system to a variety for shots catered to each player's level, while also evaluating their time on the court after.",
    name: 'Teddy Bouquemont',
    title: 'Head Pro at Westmoreland Country Club in Wilmette, IL',
    img: '/images/teddy.webp',
  },
  {
    quote: "As Padel Tennis gains traction in the U.S., Volley allows us to support new players with a system that can help them customize their practice and get the most of their time on the court.",
    name: 'Scott Grote',
    title: 'Certified padel pro and owner of PADELphia in Philadelphia, PA',
    img: '/images/scott.webp',
  },
  {
    quote: "Volley is the most advanced training tool for racquet sports that I've ever seen, and has the ability to revolutionize racquet sports for players, pros and programs all over the world.",
    name: 'Ana Marija Zubori',
    title: '2X APTA National Champion and director of Paddle at New Canaan Country Club in New Canaan, CT',
    img: '/images/ana.webp',
  },
];

function Testimonials() {
  return (
    <section style={{ background: 'linear-gradient(#132751, #d5dbed)', padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem', alignItems: 'end' }} className="testi-header">
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.1 }}>
            Our Client Says
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', lineHeight: 1.7 }}>
            We take pride in delivering exceptional results — but don&apos;t just take our word for it. Hear directly from the clients who have experienced our work firsthand.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="testi-grid">
          {testimonials.map(t => (
            <div key={t.name} style={{ backgroundColor: '#5170B3', borderRadius: '20px', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <svg width="58" height="48" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2537 15.2851L21.2537 32L38 32L38 15.2851L27.2279 15.2851C27.2279 8.91758 30.4967 4.46154 37.0345 1.52747e-06L30.3448 1.52747e-06C24.0148 3.73626 21.2537 8.91758 21.2537 15.2851Z" fill="#3CE97C"/>
                  <path d="M0 15.2851L0 32L16.7463 32L16.7463 15.2851L6.02463 15.2851C6.02463 8.91758 9.14286 4.46154 15.6207 0L8.93103 0C2.75369 3.73626 0 8.91758 0 15.2851Z" fill="#3CE97C"/>
                </svg>
              </div>
              <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: 1.8, flex: 1 }}>{t.quote}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.25rem', marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src={t.img} alt={t.name} style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                <div>
                  <p style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{t.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', margin: '0.25rem 0 0' }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .testi-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .testi-header { grid-template-columns: 1fr !important; } }
      `}</style>
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
        <PoweredBy />
        <ImproveFaster />
        <ChooseYourSport />
        <BuiltForClubs />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
