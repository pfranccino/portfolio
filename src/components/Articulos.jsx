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
              Escribo<br /><span className="muted">desde el barro.</span>
            </h2>
            <p className="sec-lede">
              Cuento lo que viví adentro de cada proyecto y lo que aprendí ahí.
              Para manuales ya está la documentación.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {writings.map((article) => (
            <a
              key={article.link}
              className={styles.card}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Leer "${article.title}" en Medium (se abre en otra pestaña)`}
            >
              <div className={styles.date}>
                <span>{article.year}</span>
                <span className={styles.badge}>{article.category}</span>
              </div>
              <h3 className={styles.title}>{article.title}</h3>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <span className={styles.read}>
                Leer en Medium <span className={styles.arr} aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>

        <div className={styles.moreLine}>
          <p>Estos son 4 de los 6 que llevo publicados.</p>
          <a href={profile.social.medium} target="_blank" rel="noreferrer">
            Ver todos en Medium <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Articulos;
