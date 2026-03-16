'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', organization: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem', borderRadius: '0.5rem', border: '1px solid #d1d5db',
    fontSize: '0.95rem', fontFamily: 'Fira Sans, sans-serif', outline: 'none', transition: 'border-color 0.2s',
    backgroundColor: 'white', color: '#1f2937',
  };

  return (
    <>
      <Navbar />
      <main>
        <section style={{ backgroundColor: '#132751', marginTop: '90px', padding: '5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }} className="contact-grid">
              {/* Left — Messaging */}
              <div>
                <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  Let&apos;s Elevate Your Racquets Program
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                  Have questions or want to see Volley in action? Our team is here to help — just drop us a message and we&apos;ll get back to you quickly.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    'Learn how assessments drive player engagement',
                    'See how clubs use Volley to grow programs',
                    'Get answers about pricing and setup',
                    'No pressure — just a conversation',
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
                {status === 'success' ? (
                  <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#3CE97C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                      <svg width="28" height="28" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#132751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#132751', marginBottom: '0.5rem' }}>Game On!</h3>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>Your message is on its way to our team. We&apos;ll be in touch soon to get the rally started.</p>
                    <button onClick={() => setStatus('idle')}
                      style={{ marginTop: '1.5rem', backgroundColor: '#132751', color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, padding: '10px 24px', borderRadius: '9999px', fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                  <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: '#132751', marginBottom: '1.5rem' }}>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" style={inputStyle} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle} required />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(optional)" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Organization / Club</label>
                      <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Your club or facility (optional)" style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#132751', marginBottom: '0.4rem' }}>Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help?" rows={4}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }} required />
                    </div>

                    {status === 'error' && (
                      <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: 0 }}>{errorMessage}</p>
                    )}

                    <button type="submit" disabled={status === 'sending'}
                      style={{ backgroundColor: status === 'sending' ? '#9ca3af' : '#3CE97C', color: '#132751', fontFamily: 'Montserrat, sans-serif', fontWeight: 700, padding: '14px', borderRadius: '9999px', fontSize: '1rem', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer', transition: 'all 0.2s', marginTop: '0.5rem' }}
                      onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.backgroundColor = '#132751'; e.currentTarget.style.color = 'white'; } }}
                      onMouseLeave={e => { if (status !== 'sending') { e.currentTarget.style.backgroundColor = '#3CE97C'; e.currentTarget.style.color = '#132751'; } }}>
                      {status === 'sending' ? 'Sending...' : "Let's Talk"}
                    </button>
                  </form>
                  </>
                )}
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
