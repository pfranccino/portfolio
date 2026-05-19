import profileImage from '../assets/profile.jpg';
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
              Impulsado por la curiosidad de crear. Me apasiona el código, la arquitectura y el mundo mobile.
            </p>
            <p>
              Busco entender realmente <em>qué</em> es el software robusto y cómo construirlo.
              Siempre estoy explorando nuevas tecnologías, porque experimentar es la mejor forma de aprender.
            </p>
            <p>
              Hoy estoy en el mundo Android nativo, en fintech. Mañana… quién sabe.
              Lo que sí sé es que voy a estar leyendo, escribiendo y construyendo algo.
            </p>
          </div>

          <div className={styles.photo}>
            <div className={styles.frame}>
              <img
                src={profileImage}
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
              <div className={styles.hobbyLabel}>
                <span className={styles.dot} />
                {hobby.name}
              </div>
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
                  Escuchar el mix →
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
