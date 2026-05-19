import profileImage from '../assets/profile.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className="wrap">

        <div className={styles.eyebrow}>
          Disponible para conversar · Santiago, Chile
        </div>

        <h1 className={styles.h1}>
          Desarrollador <span className={styles.accent}>Android&nbsp;Senior.</span><br />
          Construyendo con Kotlin<br />
          <span className={styles.muted}>desde 2019.</span>
        </h1>

        <p className={styles.lede}>
          +5 años construyendo <strong>Android nativo en producción</strong>, hoy en fintech.
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
            Hablemos <span className="arrow">↗</span>
          </a>
          <a href="#cv" className="btn ghost">Descargar CV</a>
        </div>

        <div className={styles.metaRow}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statV}>+5</div>
              <div className={styles.statL}>Años Android</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statV}>3</div>
              <div className={styles.statL}>Herramientas OSS</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statV}>4</div>
              <div className={styles.statL}>Artículos publicados</div>
            </div>
          </div>

          <div className={styles.signature}>
            <div className={styles.stamp}>
              <img
                src={profileImage}
                alt="Paul Franccino — Desarrollador Android Senior"
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

      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          <span>Kotlin</span><span>Jetpack Compose</span><span>MVI Architecture</span>
          <span>Coroutines &amp; Flow</span><span>Hilt</span><span>Room</span>
          <span>Retrofit</span><span>JUnit5</span><span>Mockk</span>
          <span>Fastlane</span><span>GitHub Actions</span><span>Modularización</span>
          <span>Kotlin</span><span>Jetpack Compose</span><span>MVI Architecture</span>
          <span>Coroutines &amp; Flow</span><span>Hilt</span><span>Room</span>
          <span>Retrofit</span><span>JUnit5</span><span>Mockk</span>
          <span>Fastlane</span><span>GitHub Actions</span><span>Modularización</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
