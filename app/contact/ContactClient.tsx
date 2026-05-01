'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { IconPhone, IconWhatsApp, IconLocation, IconArrow } from '../components/Icons';

export default function ContactPage() {
  const [bookForm, setBookForm] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '', area: '', notes: '' });
  const [contactForm, setContactForm] = useState({ name: '', phone: '', message: '' });
  const [bookSent, setBookSent] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const wa = `Hi Al Haya,%0AName: ${bookForm.name}%0APhone: ${bookForm.phone}%0AService: ${bookForm.service}%0ADate: ${bookForm.date}%0ATime: ${bookForm.time}%0AArea: ${bookForm.area}%0ANotes: ${bookForm.notes}`;
    window.open(`https://wa.me/971547199189?text=${wa}`, '_blank');
    setBookSent(true);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    const wa = `Hi Al Haya,%0AName: ${contactForm.name}%0APhone: ${contactForm.phone}%0AMessage: ${contactForm.message}`;
    window.open(`https://wa.me/971547199189?text=${wa}`, '_blank');
    setContactSent(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="page-hero">
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <div className="grid-bg"/>
            <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)', filter: 'blur(50px)', top: 0, right: 0 }}/>
          </div>
          <div className="container-x" style={{ position: 'relative', zIndex: 1 }}>
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-muted)' }}>Contact</span>
            </div>
            <div className="section-tag">Book Now</div>
            <h1 className="reveal" style={{ fontSize: 'clamp(36px, 6vw, 80px)', lineHeight: 1.0, marginBottom: 20 }}>
              Book Your <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Sofa Cleaning</span>
            </h1>
            <p className="reveal reveal-delay-1" style={{ color: 'var(--fg-muted)', fontSize: 18, maxWidth: 500, lineHeight: 1.65 }}>
              Get in touch — we respond within 1 hour and offer same-day appointments across Dubai, Sharjah &amp; Ajman.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-sm" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {[
                { icon: <IconPhone size={24}/>, label: 'Phone', value: '+971 54 719 9189', href: 'tel:+971547199189', color: 'var(--accent)' },
                { icon: <IconWhatsApp size={24}/>, label: 'WhatsApp', value: '+971 54 719 9189', href: 'https://wa.me/971547199189', color: '#25D366' },
                { icon: <IconLocation size={24}/>, label: 'Service Area', value: 'All UAE Emirates', href: null, color: '#FF5A3C' },
              ].map((c) => (
                <div key={c.label} className="card reveal" style={{ textAlign: 'center', padding: 32 }}>
                  <div style={{ color: c.color, display: 'flex', justifyContent: 'center', marginBottom: 16 }}>{c.icon}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dim)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{ fontSize: 16, fontWeight: 700, color: c.color }}>
                      {c.value}
                    </a>
                  ) : (
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{c.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Forms */}
        <section className="section" style={{ borderBottom: '1px solid var(--line)' }}>
          <div className="container-x">
            <div className="contact-forms-grid" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'start' }}>

              {/* Booking Form */}
              <div className="reveal">
                <div style={{ marginBottom: 32 }}>
                  <div className="section-tag">Appointment</div>
                  <h2 style={{ fontSize: 'clamp(26px, 3vw, 40px)', marginBottom: 10 }}>Book an Appointment</h2>
                  <p style={{ color: 'var(--fg-muted)', fontSize: 15 }}>Fill in the details and we&apos;ll confirm your booking via WhatsApp.</p>
                </div>
                {bookSent ? (
                  <div style={{ background: 'color-mix(in oklab, #25D366 15%, transparent)', border: '1px solid #25D366', borderRadius: 16, padding: 32, textAlign: 'center' }}>
                    <div style={{ width:48,height:48,borderRadius:'50%',background:'color-mix(in oklab,#25D366 20%,transparent)',border:'1px solid #25D366',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16,fontSize:24,color:'#25D366' }}>&#10003;</div>
                    <h3 style={{ marginBottom: 8 }}>Booking Sent!</h3>
                    <p style={{ color: 'var(--fg-muted)' }}>Your request has been sent to WhatsApp. We&apos;ll confirm shortly!</p>
                    <button onClick={() => setBookSent(false)} className="btn btn-ghost" style={{ marginTop: 20 }}>Make Another Booking</button>
                  </div>
                ) : (
                  <form onSubmit={handleBook} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <div className="form-row-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input className="form-input" type="text" placeholder="Ahmed Al Mansouri" required value={bookForm.name} onChange={(e) => setBookForm({ ...bookForm, name: e.target.value })}/>
                      </div>
                      <div>
                        <label className="form-label">Phone / WhatsApp *</label>
                        <input className="form-input" type="tel" placeholder="+971 50 000 0000" required value={bookForm.phone} onChange={(e) => setBookForm({ ...bookForm, phone: e.target.value })}/>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Email (Optional)</label>
                      <input className="form-input" type="email" placeholder="your@email.com" value={bookForm.email} onChange={(e) => setBookForm({ ...bookForm, email: e.target.value })}/>
                    </div>
                    <div>
                      <label className="form-label">Service Required *</label>
                      <select className="form-input" required value={bookForm.service} onChange={(e) => setBookForm({ ...bookForm, service: e.target.value })}>
                        <option value="">Select a service...</option>
                        <option value="Sofa Deep Cleaning">Sofa Deep Cleaning (from AED 99)</option>
                        <option value="Sofa Shampooing">Sofa Shampooing (from AED 79)</option>
                        <option value="Both Services">Both Services — Deep Clean + Shampoo</option>
                      </select>
                    </div>
                    <div className="form-row-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label className="form-label">Preferred Date *</label>
                        <input className="form-input" type="date" required value={bookForm.date} min={new Date().toISOString().split('T')[0]} onChange={(e) => setBookForm({ ...bookForm, date: e.target.value })}/>
                      </div>
                      <div>
                        <label className="form-label">Preferred Time *</label>
                        <select className="form-input" required value={bookForm.time} onChange={(e) => setBookForm({ ...bookForm, time: e.target.value })}>
                          <option value="">Select time...</option>
                          <option value="07:00 - 09:00 AM">07:00 - 09:00 AM</option>
                          <option value="09:00 - 11:00 AM">09:00 - 11:00 AM</option>
                          <option value="11:00 AM - 01:00 PM">11:00 AM - 01:00 PM</option>
                          <option value="01:00 - 03:00 PM">01:00 - 03:00 PM</option>
                          <option value="03:00 - 05:00 PM">03:00 - 05:00 PM</option>
                          <option value="05:00 - 07:00 PM">05:00 - 07:00 PM</option>
                          <option value="07:00 - 09:00 PM">07:00 - 09:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="form-label">Location / Area *</label>
                      <select className="form-input" required value={bookForm.area} onChange={(e) => setBookForm({ ...bookForm, area: e.target.value })}>
                        <option value="">Select your area...</option>
                        <optgroup label="🏙 Dubai">
                          <option>Dubai Marina</option>
                          <option>JVC (Jumeirah Village Circle)</option>
                          <option>JLT (Jumeirah Lakes Towers)</option>
                          <option>Downtown Dubai</option>
                          <option>Business Bay</option>
                          <option>Deira</option>
                          <option>Bur Dubai</option>
                          <option>Mirdif</option>
                          <option>Al Quoz</option>
                          <option>Al Barsha</option>
                          <option>Jumeirah</option>
                          <option>Palm Jumeirah</option>
                          <option>Dubai Hills</option>
                          <option>Al Rashidiya</option>
                          <option>International City</option>
                          <option>Al Furjan</option>
                          <option>Motor City</option>
                          <option>Sports City</option>
                          <option>Silicon Oasis</option>
                          <option>Discovery Gardens</option>
                          <option>Other Dubai Area</option>
                        </optgroup>
                        <optgroup label="🌆 Sharjah">
                          <option>Sharjah City Centre</option>
                          <option>Al Nahda Sharjah</option>
                          <option>Al Qasimia</option>
                          <option>Al Majaz</option>
                          <option>Al Taawun</option>
                          <option>Muwaileh</option>
                          <option>Al Khan</option>
                          <option>Al Mareija</option>
                          <option>University City</option>
                          <option>Other Sharjah Area</option>
                        </optgroup>
                        <optgroup label="🌇 Ajman">
                          <option>Ajman City</option>
                          <option>Al Nuaimia</option>
                          <option>Al Rashidiya Ajman</option>
                          <option>Al Jurf</option>
                          <option>Al Hamidiya</option>
                          <option>Emirates City</option>
                          <option>Al Mowaihat</option>
                          <option>Other Ajman Area</option>
                        </optgroup>
                        <optgroup label="🏛 Abu Dhabi">
                          <option>Abu Dhabi City</option>
                          <option>Al Khalidiyah</option>
                          <option>Al Reem Island</option>
                          <option>Al Muroor</option>
                          <option>Khalifa City</option>
                          <option>Al Mushrif</option>
                          <option>Yas Island</option>
                          <option>Saadiyat Island</option>
                          <option>Other Abu Dhabi Area</option>
                        </optgroup>
                        <optgroup label="🌴 Ras Al Khaimah">
                          <option>RAK City</option>
                          <option>Al Hamra Village</option>
                          <option>Mina Al Arab</option>
                          <option>Al Nakheel</option>
                          <option>Other RAK Area</option>
                        </optgroup>
                        <optgroup label="⛵ Fujairah">
                          <option>Fujairah City</option>
                          <option>Al Faseel</option>
                          <option>Other Fujairah Area</option>
                        </optgroup>
                        <optgroup label="🌊 Umm Al Quwain">
                          <option>UAQ City</option>
                          <option>Other UAQ Area</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Additional Notes</label>
                      <textarea className="form-input" rows={3} placeholder="e.g. 3-seater fabric sofa, has coffee stains on cushions..." value={bookForm.notes} onChange={(e) => setBookForm({ ...bookForm, notes: e.target.value })} style={{ resize: 'vertical' }}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ fontSize: 15, padding: '16px 32px', justifyContent: 'center' }}>
                      Send Booking via WhatsApp <IconArrow size={14}/>
                    </button>
                    <p style={{ color: 'var(--fg-dim)', fontSize: 13, textAlign: 'center' }}>
                      We&apos;ll confirm your appointment within 1 hour
                    </p>
                  </form>
                )}
              </div>

              {/* Simple Contact Form */}
              <div className="reveal reveal-delay-2">
                <div style={{ marginBottom: 32 }}>
                  <div className="section-tag">💬 Quick Message</div>
                  <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', marginBottom: 10 }}>Send a Message</h2>
                  <p style={{ color: 'var(--fg-muted)', fontSize: 15 }}>Have a question? We&apos;d love to hear from you.</p>
                </div>
                {contactSent ? (
                  <div style={{ background: 'color-mix(in oklab, var(--accent) 12%, transparent)', border: '1px solid var(--accent)', borderRadius: 16, padding: 28, textAlign: 'center' }}>
                    <div style={{ width:40,height:40,borderRadius:'50%',background:'color-mix(in oklab,var(--accent) 20%,transparent)',border:'1px solid var(--accent)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:12,fontSize:20,color:'var(--accent)' }}>&#10003;</div>
                    <h3 style={{ marginBottom: 8 }}>Message Sent!</h3>
                    <p style={{ color: 'var(--fg-muted)' }}>We&apos;ll get back to you shortly.</p>
                    <button onClick={() => setContactSent(false)} className="btn btn-ghost" style={{ marginTop: 16 }}>Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleContact} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input className="form-input" type="text" placeholder="Your full name" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}/>
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input className="form-input" type="tel" placeholder="+971 50 000 0000" required value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}/>
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea className="form-input" rows={5} placeholder="How can we help you?" required value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} style={{ resize: 'vertical' }}/>
                    </div>
                    <button type="submit" className="btn btn-wa" style={{ fontSize: 15, padding: '14px 28px', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <IconWhatsApp size={18}/> Send via WhatsApp
                    </button>
                  </form>
                )}

                {/* Quick contact options */}
                <div style={{ marginTop: 32, padding: 24, background: 'var(--bg-elev)', borderRadius: 16, border: '1px solid var(--line)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Or reach us directly</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <a href="tel:+971547199189" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-muted)', fontSize: 15, transition: 'color 0.2s' }}>
                      <IconPhone size={18}/> +971 54 719 9189
                    </a>
                    <a href="https://wa.me/971547199189" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-muted)', fontSize: 15 }}>
                      <IconWhatsApp size={18}/> WhatsApp Chat
                    </a>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--fg-muted)', fontSize: 15 }}>
                      <IconLocation size={18}/> Dubai, UAE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="section-sm" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
          <div className="container-x">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 36 }}>
              <div className="section-tag">Service Area</div>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', marginBottom: 12 }}>
                We Cover All of <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>UAE</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
                Same-day service available across Dubai, Sharjah, Ajman and all other emirates.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 40 }}>
              {[
                { name: 'Dubai', icon: '🏙', areas: 'Marina, Downtown, JVC, Business Bay & more' },
                { name: 'Sharjah', icon: '🌆', areas: 'Al Nahda, Al Majaz, Muwaileh & more' },
                { name: 'Ajman', icon: '🌇', areas: 'Al Nuaimia, Emirates City & more' },
                { name: 'Abu Dhabi', icon: '🏛', areas: 'City Centre, Khalifa City & more' },
                { name: 'RAK', icon: '🌴', areas: 'RAK City, Al Hamra & more' },
                { name: 'Fujairah', icon: '⛵', areas: 'Fujairah City & surrounds' },
              ].map((area) => (
                <div key={area.name} className="card" style={{ padding: 20, textAlign: 'center' }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{area.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{area.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--fg-dim)', lineHeight: 1.5 }}>{area.areas}</div>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid var(--line)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462143.9035634647!2d54.89784285!3d25.07575755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                width="100%"
                height="360"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Haya Cleaning Services — Service Area Map"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}