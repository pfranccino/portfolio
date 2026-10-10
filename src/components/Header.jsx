import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Header.module.css';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#trabajo', label: 'Trabajo' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#articulos', label: 'Artículos' },
];

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1));

const currentTheme = () => {
  const forced = document.documentElement.dataset.theme;
  if (forced) return forced;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [theme, setTheme] = useState(currentTheme);
  const burgerRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 760) setMenuOpen(false); };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return () => { document.body.style.overflow = ''; };

    firstLinkRef.current?.focus();
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      setMenuOpen(false);
      burgerRef.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* storage blocked: theme still applies for this visit */ }
    setTheme(next);
  };

  const themeLabel = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';

  const drawer = (
    <div
      id="mobile-menu"
      className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}
      inert={!menuOpen}
    >
      <nav aria-label="Menú móvil">
        <ul>
          {NAV_LINKS.map(({ href, label }, i) => (
            <li key={href}>
              <a href={href} onClick={closeMenu} ref={i === 0 ? firstLinkRef : undefined}>{label}</a>
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
                <li key={href}>
                  <a href={href} className={activeId === href.slice(1) ? styles.active : ''}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.end}>
            <a href="mailto:paul.ayala023@gmail.com" className={styles.mail}>
              paul.ayala023@gmail.com
            </a>

            <button type="button" className={styles.theme} onClick={toggleTheme}>
              {themeLabel}
            </button>

            <button
              ref={burgerRef}
              type="button"
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {createPortal(drawer, document.body)}
    </>
  );
};

export default Header;
