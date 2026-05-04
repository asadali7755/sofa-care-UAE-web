'use client';
import { useState, useEffect } from 'react';

function useTypewriter(words: string[], typingSpeed = 80, deleteSpeed = 40, pauseMs = 1600) {
  const [text, setText] = useState(words[0]);
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx % words.length];
    let t: ReturnType<typeof setTimeout> | undefined;
    if (!deleting && text === current) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(() => {
        setText((s) => deleting ? s.slice(0, -1) : current.slice(0, s.length + 1));
      }, deleting ? deleteSpeed : typingSpeed);
    }
    return () => { if (t) clearTimeout(t); };
  }, [text, deleting, idx, words, typingSpeed, deleteSpeed, pauseMs]);
  return text;
}

export default function TypewriterText() {
  const role = useTypewriter(['Sofa Deep Cleaning', 'Sofa Shampooing', 'Stain Removal', 'Same Day Service', 'At-Home Service']);
  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(15px, 1.8vw, 26px)', fontWeight: 700, color: 'var(--accent)', marginTop: 18, marginBottom: 16, minHeight: '1.5em', letterSpacing: '-0.01em' }}>
      &gt; <span>{role}</span><span className="cursor-blink">_</span>
    </div>
  );
}
