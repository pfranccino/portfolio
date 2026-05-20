import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#trabajo', label: 'Trabajo' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#articulos', label: 'Artículos' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 760) setMenuOpen(false); };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const drawer = (
    <div
      id="mobile-menu"
      className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
      aria-hidden={!menuOpen}
    >
      <nav aria-label="Menú móvil">
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="mailto:paul.ayala023@gmail.com"
        className={styles.drawerMail}
        onClick={closeMenu}
      >
        paul.ayala023@gmail.com
      </a>
    </div>
  );

  return (
    <>
      <header className={`${styles.header} ${scrolled || menuOpen ? styles.scrolled : ''}`}>
        <div className={`wrap ${styles.row}`}>
          <a className={styles.brand} href="#hero" onClick={closeMenu}>Paul Franccino</a>

          <nav className={styles.nav} aria-label="Principal">
            <ul>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <a href="mailto:paul.ayala023@gmail.com" className={styles.mail}>
            paul.ayala023@gmail.com
          </a>

          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {createPortal(drawer, document.body)}
    </>
  );
};

export default Header;
