'use client';
import { useRef, useState } from 'react';
import { IconPlay } from './Icons';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--line)', background: 'var(--bg-elev)' }}>
      <div className="container-x">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag">Watch &amp; See</div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 52px)', marginBottom: 16 }}>
            See the <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>Transformation</span>
          </h2>
          <p style={{ color: 'var(--fg-muted)', maxWidth: 480, margin: '0 auto', fontSize: 16 }}>
            Watch how we restore your sofa to brand-new condition — from dirty &amp; stained to fresh &amp; clean in just a few hours.
          </p>
        </div>

        {/* Video container */}
        <div className="reveal" style={{
          position: 'relative', borderRadius: 20, overflow: 'hidden',
          border: '1px solid var(--line-strong)', maxWidth: 900, margin: '0 auto',
          aspectRatio: '16/9', background: 'var(--bg-raised)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
        }}>

          {/* Actual video element */}
          <video
            ref={videoRef}
            src="/sofa-cleaning.mp4"
            onClick={handleVideoClick}
            onPlay={() => setPlaying(true)}
            controls={playing}
            playsInline
            preload="metadata"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              cursor: 'pointer',
              opacity: playing ? 1 : 0,
              transition: 'opacity 0.4s',
              zIndex: playing ? 2 : 0,
            }}
          />

          {/* Thumbnail overlay */}
          {!playing && (
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 28,
              background: 'linear-gradient(135deg, #0f0f0f 0%, color-mix(in oklab, var(--accent) 12%, #0f0f0f) 100%)',
            }}>
              {/* Stylish heading */}
              <div style={{ textAlign: 'center', padding: '0 24px' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 'clamp(10px, 1.2vw, 13px)',
                  color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase',
                  marginBottom: 14,
                }}>
                  Al Haya Sofa Care UAE · Dubai
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px, 4.5vw, 56px)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.0,
                  margin: 0,
                  color: '#ffffff',
                }}>
                  Professional{' '}
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    color: 'var(--accent)',
                  }}>
                    Sofa
                  </span>
                  {' '}Cleaning
                  <br />
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 800 }}>Process</span>
                </h3>
              </div>

              {/* Play button */}
              <button
                onClick={handlePlay}
                className="play-btn"
                aria-label="Play sofa cleaning video"
              >
                <IconPlay size={30}/>
              </button>

              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em',
              }}>
                CLICK TO PLAY
              </div>

              {/* Corner badge */}
              <div style={{
                position: 'absolute', top: 16, right: 16,
                padding: '6px 12px', borderRadius: 999,
                background: 'rgba(11,11,11,0.75)', backdropFilter: 'blur(8px)',
                border: '1px solid var(--line)',
                fontFamily: 'var(--font-mono)', fontSize: 10,
                color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em',
              }}>
                HD · Before &amp; After
              </div>

              {/* Decorative teal line accent */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: 3,
                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
              }}/>
            </div>
          )}
        </div>

        {/* Stats below video */}
        <div className="reveal" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 20, marginTop: 48, maxWidth: 700, margin: '48px auto 0',
        }}>
          {[
            { n: '2 hrs', l: 'Average service time' },
            { n: '100%', l: 'Customer satisfaction' },
            { n: 'Eco', l: 'Safe products used' },
            { n: 'Fast', l: 'Same-day dry' },
          ].map((s) => (
            <div key={s.l} style={{
              textAlign: 'center', padding: '20px',
              background: 'var(--bg-raised)', borderRadius: 12,
              border: '1px solid var(--line)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--accent)' }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-muted)', marginTop: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
