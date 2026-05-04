'use client';
import { useEffect, useState } from 'react';

export default function ScrollRevealInit() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Add js-ready so CSS animations kick in (elements hidden → animated in)
    document.documentElement.classList.add('js-ready');

    const revealAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('in');
        }
      });
    };

    // Reveal immediately visible elements
    revealAll();
    const t1 = setTimeout(revealAll, 100);
    const t2 = setTimeout(revealAll, 400);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 100px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      io.disconnect();
    };
  }, []);

  return (
    <button
      className={'scroll-top ' + (scrolled ? 'show' : '')}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >↑</button>
  );
}
