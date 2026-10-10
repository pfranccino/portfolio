import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className="wrap">

        <p className={styles.eyebrow}>
          Disponible para conversar · Santiago, Chile
        </p>

        <h1 className={styles.h1}>
          Desarrollador <span className={styles.accent}>Android&nbsp;Senior.</span><br />
          Construyendo con Kotlin<br />
          <span className={styles.muted}>desde 2019.</span>
        </h1>

        <p className={styles.lede}>
          +7 años construyendo <strong>Android nativo en producción</strong>, hoy en fintech.
          Escribo en Medium sobre lo que vivo en cada proyecto y publico herramientas
          open-source para mantener proyectos Gradle bajo control.
        </p>

        <div className={styles.tags} aria-label="Stack principal">
          <span className="chip">Kotlin</span>
          <span className="chip">Jetpack Compose</span>
          <span className="chip">MVI</span>
          <span className="chip">CI/CD · Fastlane</span>
          <span className="chip">JUnit5</span>
        </div>

        <div className={styles.ctas}>
          <a href="mailto:paul.ayala023@gmail.com" className="btn primary">
            Hablemos por mail
          </a>
        </div>

        <div className={styles.metaRow}>
          <div className={styles.stats}>
            <div>
              <div className={styles.statV}>+7</div>
              <div className={styles.statL}>Años en Android</div>
            </div>
            <div>
              <div className={styles.statV}>2</div>
              <div className={styles.statL}>Herramientas open-source</div>
            </div>
            <div>
              <div className={styles.statV}>6</div>
              <div className={styles.statL}>Artículos en Medium</div>
            </div>
          </div>

          <div className={styles.signature}>
            <div className={styles.stamp}>
              <img
                src="/img/profile-stamp.webp"
                srcSet="/img/profile-stamp.webp 1x, /img/profile-stamp-2x.webp 2x"
                alt="Paul Franccino, Desarrollador Android Senior"
                width={120}
                height={150}
                fetchpriority="high"
              />
            </div>
            <div className={styles.cap}>
              <b>@pfranccino</b><br />Santiago · 2026
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
