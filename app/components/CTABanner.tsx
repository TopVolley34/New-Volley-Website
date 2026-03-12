'use client';
import Link from 'next/link';

export default function CTABanner() {
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
