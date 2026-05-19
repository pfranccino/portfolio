import profile from '../data/profile.json';
import styles from './Contacto.module.css';

const channels = [
  { label: 'LinkedIn', handle: 'in/paul-franccino-ayala', href: 'https://www.linkedin.com/in/paul-franccino-ayala/' },
  { label: 'GitHub', handle: '@pfranccino', href: 'https://github.com/pfranccino' },
  { label: 'Medium', handle: '@pfranccino', href: 'https://pfranccino.medium.com/' },
  { label: 'Spotify', handle: 'Mood Mix', href: profile.social.spotify },
];

const Contacto = () => {
  return (
    <section className={styles.contacto} id="contacto">
      <div className="wrap">
        <div className="sec-head">
          <div className={styles.secNum}>06 / Contacto</div>
        </div>

        <div className={styles.grid}>
          <div>
            <h2 className={styles.heading}>
              Conversemos.<br /><em>Mejor por mail.</em>
            </h2>
            <p className={styles.lead}>
              Si tienes un proyecto Android complejo, un dolor de cabeza con Gradle,
              o solo quieres comparar notas sobre arquitectura — escríbeme.
              Suelo contestar dentro de 48 hrs.
            </p>
            <a
              href="mailto:paul.ayala023@gmail.com"
              className={styles.mailPill}
              aria-label="Enviar email a Paul Franccino"
            >
              paul.ayala023@gmail.com <span>↗</span>
            </a>
          </div>

          <div className={styles.channels}>
            {channels.map((ch) => (
              <a
                key={ch.label}
                className={styles.channel}
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${ch.label} de Paul Franccino`}
              >
                <span className={styles.chLabel}>{ch.label}</span>
                <span className={styles.chHandle}>{ch.handle}</span>
                <span className={styles.chExt}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
