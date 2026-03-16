'use client';
import { useState } from 'react';
import Link from 'next/link';

const navLinkStyle = { color: 'white' as const, fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '14px', letterSpacing: '0.5px', textDecoration: 'none' as const };

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'ASSESSMENTS', href: '/assessments' },
    { label: 'FOR CLUBS', href: '/for-clubs' },
    { label: 'FOR PLAYERS', href: '/for-players' },
    { label: 'PICKLEBALL', href: '/pickleball' },
    { label: 'PADEL', href: '/padel' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'ABOUT', href: '/about-us' },
  ];

  return (
    <>
      <nav style={{ backgroundColor: '#132751', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'fixed', top: 0, width: '100%', zIndex: 50 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px', gap: '1rem' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/volley-logo.png.webp" alt="Volley" style={{ height: '40px', width: 'auto', maxWidth: '160px' }} />
            </Link>

            {/* Desktop nav */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="nav-desktop">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} style={navLinkStyle}
                  onMouseEnter={e => e.currentTarget.style.color = '#3CE97C'}
                  onMouseLeave={e => e.currentTarget.style.color = 'white'}>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link href="/get-a-demo"
                style={{ backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '10px 24px', borderRadius: '34px', fontSize: '14px', transition: 'all 0.2s', textDecoration: 'none', whiteSpace: 'nowrap' }}
                className="cta-desktop"
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; }}>
                Get a Demo
              </Link>
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

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 49 }} onClick={() => setMobileOpen(false)}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}></div>
        </div>
      )}

      {/* Mobile slide-in menu */}
      <div style={{
        position: 'fixed', top: 0, right: 0, height: '100vh', width: '280px',
        backgroundColor: '#132751', zIndex: 100,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        overflowY: 'auto', padding: '2rem 1.5rem',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.4)'
      }}>
        <button onClick={() => setMobileOpen(false)}
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'white', fontSize: '1.5rem', lineHeight: 1 }}>
          ✕
        </button>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.08em', padding: '14px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', display: 'block' }}>
              {link.label}
            </Link>
          ))}
          <Link href="/get-a-demo" onClick={() => setMobileOpen(false)}
            style={{ display: 'block', backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px', borderRadius: '34px', textAlign: 'center', marginTop: '1.5rem', textDecoration: 'none', fontSize: '16px' }}>
            Get a Demo
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
