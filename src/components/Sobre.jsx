import profile from '../data/profile.json';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <section className="sec" id="sobre">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">01 / Sobre</div>
          <div>
            <h2 className="sec-title">
              Curiosidad <span className="muted">de crear,</span><br />
              oficio <span className="muted">de construir.</span>
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p className={styles.bioFirst}>
              Hago apps Android desde 2019. Hoy, en MACH, migro los flujos de onboarding
              y recuperación de cuenta de una app financiera.
            </p>
            <p>
              Antes armé SDKs de notificaciones y autenticación en Trust Technologies, y una
              biblioteca de pruebas de hardware en Jumpitt Labs. Lo que más me engancha es la
              arquitectura: cómo partir una app en módulos para que siga siendo fácil de cambiar.
            </p>
            <p>
              Cuando algo me estorba en el día a día, escribo una herramienta en Python para
              resolverlo. Cuando un proyecto me enseña algo, lo cuento en Medium. Mañana… quién sabe.
            </p>
          </div>

          <div className={styles.photo}>
            <div className={styles.frame}>
              <img
                src="/img/profile.webp"
                srcSet="/img/profile-sm.webp 420w, /img/profile.webp 840w"
                sizes="(max-width: 880px) 100vw, 420px"
                alt="Paul Franccino Ayala"
                loading="lazy"
              />
            </div>
            <div className={styles.caption}>
              <span><b>Paul Franccino Ayala</b></span>
              <span>Santiago · CL</span>
            </div>
          </div>
        </div>

        <div className={styles.hobbies}>
          {profile.hobbies.map((hobby, i) => (
            <div key={i} className={styles.hobby}>
              <div className={styles.hobbyLabel}>{hobby.name}</div>
              <h4 className={styles.hobbyTitle}>{hobby.title}</h4>
              <p className={styles.hobbyDesc}>{hobby.desc}</p>
              {hobby.name === 'Melómano' && (
                <a
                  className={styles.hobbyLink}
                  href={profile.social.spotify}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Escuchar el Mood Mix de Paul Franccino en Spotify"
                >
                  Escuchar en Spotify <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
