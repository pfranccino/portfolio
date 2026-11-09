import profile from '../data/profile.json';
import styles from './Hero.module.css';

// Each word is a brick that drops into place; the order sets the stagger
const ROLE = ['Staff', 'Android', 'Engineer.'];

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>
            Disponible para conversar · Santiago, Chile
          </p>

          <h1 className={styles.h1}>
            <span className={styles.role}>
              {ROLE.map((word, i) => (
                <span key={word}>
                  {i > 0 && ' '}
                  <span
                    className={`${styles.brick} ${i === 0 ? styles.staff : ''}`}
                    style={{ '--i': i }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>
            <span className={styles.since}>Construyendo con Kotlin desde 2019.</span>
          </h1>

          <p className={styles.lede}>
            Trabajo en MACH, en una app financiera de uso masivo. Me gusta aportar a la
            comunidad: publico herramientas open-source y skills para Claude Code, y
            escribo en Medium lo que voy aprendiendo.
          </p>

          <div className={styles.ctas}>
            <a href="mailto:paul.ayala023@gmail.com" className="btn primary">
              Escríbeme
            </a>
            <a href="#trabajo" className={styles.secondary}>
              Ver las herramientas
            </a>
            <a
              href={profile.social.github}
              className={styles.secondary}
              target="_blank"
              rel="noreferrer"
              aria-label="Ver mi GitHub (se abre en otra pestaña)"
            >
              Ver mi GitHub <span className={styles.arr} aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <figure className={styles.portrait}>
          <img
            src="/img/profile.webp"
            srcSet="/img/profile-sm.webp 420w, /img/profile.webp 840w"
            sizes="(max-width: 760px) 40vw, 420px"
            alt="Paul Franccino Ayala, Staff Android Engineer"
            width={840}
            height={1025}
            fetchPriority="high"
          />
          <figcaption className={styles.cap}>@pfranccino</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
