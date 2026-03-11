'use client';
import { useState } from 'react';
import Link from 'next/link';

// ── NAVBAR ────────────────────────────────────────────────────────────────────
const navLinkStyle = { color: 'white' as const, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px', letterSpacing: '0.5px', textDecoration: 'none' as const };

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sportOpen, setSportOpen] = useState(false);
  const [venueOpen, setVenueOpen] = useState(false);
  const [mobileSportOpen, setMobileSportOpen] = useState(false);
  const [mobileVenueOpen, setMobileVenueOpen] = useState(false);

  return (
    <>
      <nav style={{ backgroundColor: '#132751', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'fixed', top: 0, width: '100%', zIndex: 50 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px', gap: '1rem' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/volley-logo.png.webp" alt="Volley" style={{ height: '40px', width: 'auto', maxWidth: '160px' }} />
            </Link>

            {/* Desktop nav - hidden below 768px */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="nav-desktop">
              <Link href="/" style={{ ...navLinkStyle, color: '#3CE97C' }}>HOME</Link>

              {/* Sport dropdown */}
              <div style={{ position: 'relative' }}
                onMouseEnter={() => setSportOpen(true)}
                onMouseLeave={() => setSportOpen(false)}>
                <button style={{ ...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  SPORT
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="white" strokeWidth="1.5"><path d="M1 1L5 5L9 1"/></svg>
                </button>
                {sportOpen && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, minWidth: '180px', backgroundColor: '#182F61', borderRadius: '0.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', marginTop: '8px', padding: '8px 0' }}>
                    {[['Tennis', '/tennis'], ['Padel', '/padel'], ['Pickleball', '/pickleball'], ['Platform Tennis', '/platform-tennis']].map(([label, href]) => (
                      <Link key={href} href={href}
                        style={{ display: 'block', padding: '0.6rem 1.2rem', color: 'white', fontSize: '15px', fontWeight: 500, textDecoration: 'none', transition: 'all 0.15s' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; }}>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Venue dropdown */}
              <div style={{ position: 'relative' }}
                onMouseEnter={() => setVenueOpen(true)}
                onMouseLeave={() => setVenueOpen(false)}>
                <button style={{ ...navLinkStyle, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  VENUE
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="white" strokeWidth="1.5"><path d="M1 1L5 5L9 1"/></svg>
                </button>
                {venueOpen && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, minWidth: '200px', backgroundColor: '#182F61', borderRadius: '0.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', marginTop: '8px', padding: '8px 0' }}>
                    {[['Commercial Clubs', '/commercial-clubs'], ['Member-Owned Clubs', '/member-owned-clubs'], ['Residential Courts', '/residential-courts']].map(([label, href]) => (
                      <Link key={href} href={href}
                        style={{ display: 'block', padding: '0.6rem 1.2rem', color: 'white', fontSize: '15px', fontWeight: 500, textDecoration: 'none', transition: 'all 0.15s' }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = 'white'; }}>
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/pricing" style={navLinkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#3CE97C'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}>PRICING</Link>
              <Link href="/about-us" style={navLinkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#3CE97C'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}>ABOUT</Link>
            </div>

            {/* CTA + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link href="/contact-us"
                style={{ backgroundColor: '#5170B3', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, padding: '10px 24px', borderRadius: '34px', fontSize: '14px', transition: 'all 0.2s', textDecoration: 'none', whiteSpace: 'nowrap' }}
                className="cta-desktop"
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#5170B3'; e.currentTarget.style.color = 'white'; }}>
                Let&apos;s Talk
              </Link>
              {/* Hamburger - shown below 768px */}
              <button
                className="nav-hamburger"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Open menu">
                <span style={{ display: 'block', width: '25px', height: '2px', backgroundColor: 'white', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
                <span style={{ display: 'block', width: '25px', height: '2px', backgroundColor: 'white', transition: 'all 0.2s', opacity: mobileOpen ? 0 : 1 }}></span>
                <span style={{ display: 'block', width: '25px', height: '2px', backgroundColor: 'white', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in menu from right */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 49 }} onClick={() => setMobileOpen(false)}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        </div>
      )}
      <div style={{
        position: 'fixed', top: 0, right: 0, height: '100vh', width: '280px',
        backgroundColor: '#132751', zIndex: 100,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        overflowY: 'auto', padding: '2rem 1.5rem',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.4)'
      }}>
        {/* Close button */}
        <button onClick={() => setMobileOpen(false)}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: '1.5rem', lineHeight: 1 }}>
          ✕
        </button>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          <Link href="/" onClick={() => setMobileOpen(false)}
            style={{ color: '#3CE97C', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', display: 'block' }}>HOME</Link>

          {/* Sport accordion */}
          <div>
            <button onClick={() => setMobileSportOpen(!mobileSportOpen)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em', padding: '14px 0', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
              SPORT
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="white" strokeWidth="1.5"
                style={{ transform: mobileSportOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <path d="M1 1L5 5L9 1"/>
              </svg>
            </button>
            {mobileSportOpen && (
              <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                {[['Tennis', '/tennis'], ['Padel', '/padel'], ['Pickleball', '/pickleball'], ['Platform Tennis', '/platform-tennis']].map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                    style={{ display: 'block', color: 'rgba(255,255,255,0.7)', padding: '8px 0', fontSize: '15px', textDecoration: 'none' }}>{label}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Venue accordion */}
          <div>
            <button onClick={() => setMobileVenueOpen(!mobileVenueOpen)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em', padding: '14px 0', background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
              VENUE
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="white" strokeWidth="1.5"
                style={{ transform: mobileVenueOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                <path d="M1 1L5 5L9 1"/>
              </svg>
            </button>
            {mobileVenueOpen && (
              <div style={{ paddingLeft: '1rem', paddingBottom: '0.5rem' }}>
                {[['Commercial Clubs', '/commercial-clubs'], ['Member-Owned Clubs', '/member-owned-clubs'], ['Residential Courts', '/residential-courts']].map(([label, href]) => (
                  <Link key={href} href={href} onClick={() => setMobileOpen(false)}
                    style={{ display: 'block', color: 'rgba(255,255,255,0.7)', padding: '8px 0', fontSize: '15px', textDecoration: 'none' }}>{label}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/pricing" onClick={() => setMobileOpen(false)}
            style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', display: 'block' }}>PRICING</Link>
          <Link href="/about-us" onClick={() => setMobileOpen(false)}
            style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', display: 'block' }}>ABOUT</Link>

          <Link href="/contact-us" onClick={() => setMobileOpen(false)}
            style={{ display: 'block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px', borderRadius: '34px', textAlign: 'center', marginTop: '1.5rem', textDecoration: 'none', fontSize: '16px' }}>Let&apos;s Talk</Link>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

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

// ── CTA BANNER ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#080F20' }}></div>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/contact_background.webp)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }}></div>
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '6rem 2rem' }}>
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'white', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.2 }}>
          Ready To Bring Data-Driven Development To Your Court?
        </h2>
        <Link href="/contact-us"
          style={{ display: 'inline-block', backgroundColor: '#3CE97C', color: '#080F20', fontFamily: 'Montserrat, sans-serif', fontWeight: 800, padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '0.95rem', textDecoration: 'none', letterSpacing: '0.08em', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'white'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; }}>
          CONTACT US
        </Link>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div style={{ backgroundColor: '#1d3461', padding: '4rem 0 3rem' }}>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <img src="/images/volley-logo.png.webp" alt="Volley" style={{ height: '36px', display: 'block' }} />
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                  { label: 'YouTube', icon: 'M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z' },
                  { label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                ].map(social => (
                  <a key={social.label} href="#"
                    style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = '#3CE97C')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}>
                    <svg viewBox="0 0 24 24" fill="white" style={{ width: '14px', height: '14px' }}>
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="#"><img src="/images/apple_dload.webp" alt="Download on the App Store" style={{ height: '40px', display: 'block' }} /></a>
                <a href="#"><img src="/images/google_dload.webp" alt="Get it on Google Play" style={{ height: '40px', display: 'block' }} /></a>
              </div>
            </div>

            <div>
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'white', fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>How Volley Works</h4>
              <Link href="/trainer" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '0.6rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#3CE97C')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                Trainer
              </Link>
            </div>

            <div>
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'white', fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>Help</h4>
              {[['Getting Started', '/getstarted'], ['Support', '/support'], ['FAQs', '/faqs']].map(([label, href]) => (
                <Link key={href} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '0.6rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#3CE97C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                  {label}
                </Link>
              ))}
            </div>

            <div>
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'white', fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>Company</h4>
              {[['Team', '/about-us'], ['News', '/news'], ['Blog', '/blogs'], ['Case Studies', '/customer-success-stories']].map(([label, href]) => (
                <Link key={href} href={href} style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginBottom: '0.6rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#3CE97C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                  {label}
                </Link>
              ))}
            </div>

            <div>
              <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, color: 'white', fontSize: '0.85rem', letterSpacing: '0.08em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>Subscribe To Our Newsletter</h4>
              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <input type="email" placeholder="Your email address*"
                  style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #3CE97C', padding: '0.6rem 2.5rem 0.6rem 0', color: 'white', fontSize: '0.9rem', outline: 'none' }}
                />
                <button style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#3CE97C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#132751" strokeWidth="2.5" style={{ width: '14px', height: '14px' }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </button>
              </div>
              <img src="/images/usa.png" alt="Made in USA" style={{ width: '70px', display: 'block' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#0f1e3d', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>Copyright © 2025 Volley. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
              Privacy Policy
            </Link>
            <Link href="/termsofservice" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'white')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }
        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; gap: 2rem; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
          .footer-grid > div:last-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
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
