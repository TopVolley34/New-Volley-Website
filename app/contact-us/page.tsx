'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '', type: 'club' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        {/* Hero */}
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: '1rem' }}>
              Let&apos;s Talk
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto' }}>
              Ready to bring Volley to your club or court? Fill out the form below and our team will be in touch.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section style={{ backgroundColor: 'white', padding: '4rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }} className="contact-grid">
              {/* Form */}
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#132751', marginBottom: '2rem' }}>Get In Touch</h2>
                <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>I am a...</label>
                    <select name="type" value={formData.type} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="club">Club / Venue Owner</option>
                      <option value="residential">Residential Court Owner</option>
                      <option value="player">Player</option>
                      <option value="coach">Coach / Pro</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} required />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Club / Organization</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your club name" style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your needs..." rows={5} style={{ ...inputStyle, resize: 'vertical' }} />
                  </div>
                  <button type="submit"
                    style={{ backgroundColor: '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px 32px', borderRadius: '9999px', fontSize: '1rem', border: 'none', cursor: 'pointer', transition: 'all 0.2s', alignSelf: 'flex-start' }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#132751'}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; }}
                    onMouseDown={e => e.currentTarget.style.color = 'white'}
                    onMouseUp={e => e.currentTarget.style.color = '#132751'}>
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#132751', marginBottom: '2rem' }}>Other Ways To Reach Us</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#132751', marginBottom: '0.5rem' }}>Email</h3>
                    <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem' }}>info@getvolley.com</p>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#132751', marginBottom: '0.5rem' }}>Support</h3>
                    <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem' }}>For existing customers, use the in-app chat for the fastest response. Or visit our <a href="/support" style={{ color: '#3CE97C', textDecoration: 'underline' }}>support page</a>.</p>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#132751', marginBottom: '0.5rem' }}>Schedule A Demo</h3>
                    <p style={{ color: 'rgba(19,39,81,0.6)', fontSize: '0.95rem' }}>Want to see Volley in action? Our team can arrange an in-person or virtual demo at your convenience.</p>
                  </div>
                  <div style={{ backgroundColor: '#132751', borderRadius: '1rem', padding: '2rem' }}>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#3CE97C', marginBottom: '0.75rem' }}>Made In The USA</h3>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                      Volley is headquartered in the U.S., where our team builds, tests, and ships every unit — ensuring fast service, high quality, and close support from day one.
                    </p>
                    <img src="/images/usa.png" alt="Made in USA" style={{ width: '60px', marginTop: '1rem' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
