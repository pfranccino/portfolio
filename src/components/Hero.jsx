import styles from './Hero.module.css';

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
              <span className="mark">Staff</span> Android Engineer.
            </span>
            <span className={styles.since}>Construyendo con Kotlin desde 2019.</span>
          </h1>

          <p className={styles.lede}>
            Hoy en MACH, en una app financiera de uso masivo. Publico herramientas
            open-source para entender y mantener proyectos Gradle grandes.
          </p>

          <div className={styles.ctas}>
            <a href="mailto:paul.ayala023@gmail.com" className="btn primary">
              Escríbeme
            </a>
            <a href="#trabajo" className={styles.secondary}>
              Ver las herramientas
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
            fetchpriority="high"
          />
          <figcaption className={styles.cap}>@pfranccino</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
