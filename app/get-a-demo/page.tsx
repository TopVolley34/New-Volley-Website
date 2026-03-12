'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GetADemoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', club: '', sport: 'pickleball', size: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid #d1d5db',
    fontSize: '0.95rem', fontFamily: 'Fira Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s',
    backgroundColor: 'white',
  };

  return (
    <>
      <Navbar />
      <main>
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }} className="demo-grid">
              {/* Left — Messaging */}
              <div>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  See Assessments in Action
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  Book a demo with our team to see how objective player ratings can transform your club&apos;s racquet sports program. Quick setup, no commitment.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    'See a live assessment walkthrough',
                    'Learn how clubs use ratings to drive retention',
                    'Get pricing for your club size',
                    'Ask any questions — no pressure',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3CE97C', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#132751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Form */}
              <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', padding: '2.5rem' }}>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#132751', marginBottom: '1.5rem' }}>Request a Demo</h2>
                <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Club Name *</label>
                    <input type="text" name="club" value={formData.club} onChange={handleChange} placeholder="Your club or facility" style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Primary Sport</label>
                    <select name="sport" value={formData.sport} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="pickleball">Pickleball</option>
                      <option value="padel">Padel</option>
                      <option value="platform-tennis">Platform Tennis</option>
                      <option value="tennis">Tennis</option>
                      <option value="multiple">Multiple Sports</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Club Size (members)</label>
                    <select name="size" value={formData.size} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select...</option>
                      <option value="under-100">Under 100</option>
                      <option value="100-500">100–500</option>
                      <option value="500-1000">500–1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                  <button type="submit"
                    style={{ backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px', borderRadius: '9999px', fontSize: '1rem', border: 'none', cursor: 'pointer', transition: 'all 0.2s', marginTop: '0.5rem' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#132751'; e.currentTarget.style.color = 'white'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}>
                    Book My Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .demo-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
