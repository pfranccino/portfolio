import { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '1.5rem 0',
      zIndex: 100,
      transition: 'all 0.3s ease',
      backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-primary)' }}>
          Paul Franccino
        </a>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem' }}>
            <li><a href="#about" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Sobre mí</a></li>
            <li><a href="#projects" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Proyectos</a></li>
            <li><a href="#experience" style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Experiencia</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
