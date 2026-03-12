'use client';
import { useState } from 'react';
import Link from 'next/link';

const navLinkStyle = { color: 'white' as const, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px', letterSpacing: '0.5px', textDecoration: 'none' as const };

export default function Navbar() {
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
              <Link href="/" style={navLinkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#3CE97C'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}>HOME</Link>

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

              <Link href="/trainer" style={navLinkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#3CE97C'}
                onMouseLeave={e => e.currentTarget.style.color = 'white'}>TRAINER</Link>
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

          <Link href="/trainer" onClick={() => setMobileOpen(false)}
            style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', display: 'block' }}>TRAINER</Link>
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
