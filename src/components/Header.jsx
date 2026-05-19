import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`wrap ${styles.row}`}>
        <a className={styles.brand} href="#hero">Paul Franccino</a>

        <nav className={styles.nav} aria-label="Principal">
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#trabajo">Trabajo</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
            <li><a href="#articulos">Artículos</a></li>
          </ul>
        </nav>

        <a href="mailto:paul.ayala023@gmail.com" className={styles.mail}>
          paul.ayala023@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Header;
