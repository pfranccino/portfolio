import profile from '../data/profile.json';
import styles from './Sobre.module.css';

// Verified on 2026-10-11: Android since 2019-05, public tool repos on GitHub, posts in the Medium feed
const STATS = [
  { value: '+7', label: 'años en Android' },
  { value: '4', label: 'herramientas open-source' },
  { value: '6', label: 'artículos en Medium' },
];

const Sobre = () => {
  return (
    <section className="sec" id="sobre">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Curiosidad de crear, oficio de construir.</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.bio}>
            <p className={styles.bioFirst}>
              Hago apps Android desde 2019. Llegué a MACH en 2021 como Senior y desde
              septiembre de 2026 soy Staff Android Engineer en el squad Prisma, a cargo
              del PIN y el 2FA de la app.
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

          <dl className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt className={styles.statL}>{s.label}</dt>
                <dd className={styles.statV}>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <h3 className={styles.hobbiesTitle}>Fuera del código</h3>
        <ul className={styles.hobbies}>
          {profile.hobbies.map((hobby) => (
            <li key={hobby.name} className={styles.hobby}>
              <span className={styles.hobbyLabel}>{hobby.name}</span>
              <h4 className={styles.hobbyName}>{hobby.title}</h4>
              <div className={styles.hobbyDesc}>
                <p>{hobby.desc}</p>
                {hobby.name === 'Melómano' && (
                  <a
                    className={styles.hobbyLink}
                    href={profile.social.spotify}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Escuchar la playlist Mood de Paul Franccino en Spotify (se abre en otra pestaña)"
                  >
                    Escuchar en Spotify <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sobre;
