import profile from '../data/profile.json';
import styles from './Contacto.module.css';

const channels = [
  { label: 'LinkedIn', handle: 'in/paul-franccino-ayala', href: profile.social.linkedin },
  { label: 'GitHub', handle: '@pfranccino', href: profile.social.github },
  { label: 'Medium', handle: '@pfranccino', href: profile.social.medium },
  { label: 'Spotify', handle: 'Playlist Mood', href: profile.social.spotify },
];

const Contacto = () => {
  return (
    <section className={styles.contacto} id="contacto">
      <div className={`wrap ${styles.grid}`}>
        <div>
          <h2 className={styles.heading}>Conversemos. Mejor por mail.</h2>
          <p className={styles.lead}>
            Si tienes un proyecto Android complejo, un dolor de cabeza con Gradle,
            o solo quieres comparar notas sobre arquitectura, escríbeme.
            Suelo contestar dentro de 48 hrs.
          </p>
          <a href="mailto:paul.ayala023@gmail.com" className={styles.mail}>
            paul.ayala023@gmail.com
          </a>
        </div>

        <ul className={styles.channels}>
          {channels.map((ch) => (
            <li key={ch.label}>
              <a
                className={styles.channel}
                href={ch.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${ch.label} de Paul Franccino (se abre en otra pestaña)`}
              >
                <span className={styles.chLabel}>{ch.label}</span>
                <span className={styles.chHandle}>{ch.handle}</span>
                <span className={styles.chExt} aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contacto;
