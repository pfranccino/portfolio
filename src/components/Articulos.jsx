import writings from '../data/writings.json';
import profile from '../data/profile.json';
import styles from './Articulos.module.css';

const Articulos = () => {
  return (
    <section className="sec" id="articulos">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">05 / Artículos</div>
          <div>
            <h2 className="sec-title">
              Lo que escribo<br /><span className="muted">desde el barro.</span>
            </h2>
            <p className="sec-lede">
              Experiencias, opiniones y aprendizajes desde adentro de los proyectos.
              No manuales — historias de lo que viví.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {writings.map((article, i) => (
            <a
              key={i}
              className={styles.card}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Leer "${article.title}" en Medium`}
            >
              <div className={styles.date}>
                <span>{article.year}</span>
                <span className={styles.badge}>{article.category}</span>
              </div>
              <h4 className={styles.title}>{article.title}</h4>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <span className={styles.read}>
                Leer en Medium <span className={styles.arr}>↗</span>
              </span>
            </a>
          ))}
        </div>

        <div className={styles.moreLine}>
          <p>Sigo publicando — si te interesa el tema sígueme en Medium.</p>
          <a href={profile.social.medium} target="_blank" rel="noreferrer">
            Ver todo en Medium →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articulos;
