import writings from '../data/writings.json';
import profile from '../data/profile.json';
import styles from './Articulos.module.css';

const year = (date) => date.slice(0, 4);

const linkLabel = (title) => `Leer "${title}" en Medium (se abre en otra pestaña)`;

const Articulos = () => {
  const byDate = [...writings].sort((a, b) => b.date.localeCompare(a.date));
  const series = writings.filter((w) => w.series).sort((a, b) => a.part - b.part);
  const [featured, ...rest] = byDate.filter((w) => !w.series);

  return (
    <section className="sec" id="articulos">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Escribo desde el barro.</h2>
          <p className="sec-lede">
            Cuento lo que viví adentro de cada proyecto y lo que aprendí ahí.
            Para manuales ya está la documentación.
          </p>
        </div>

        <div className={styles.layout}>
          <a
            className={styles.featured}
            href={featured.link}
            target="_blank"
            rel="noreferrer"
            aria-label={linkLabel(featured.title)}
          >
            <div className={styles.meta}>
              <time dateTime={featured.date}>{year(featured.date)}</time>
              <span>{featured.category}</span>
            </div>
            <h3 className={styles.featuredTitle}>{featured.title}</h3>
            <p className={styles.excerpt}>{featured.excerpt}</p>
            <span className={styles.read}>
              Leer en Medium <span className={styles.arr} aria-hidden="true">↗</span>
            </span>
          </a>

          <div className={styles.series}>
            <h3 className={styles.seriesTitle}>
              Serie: {series[0].series}
            </h3>
            <ol className={styles.parts}>
              {series.map((post) => (
                <li key={post.link}>
                  <a
                    className={styles.part}
                    href={post.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={linkLabel(`Parte ${post.part}: ${post.title}`)}
                  >
                    <span className={styles.partNum}>Parte {post.part}</span>
                    <span className={styles.partTitle}>
                      {post.title} <span className={styles.arr} aria-hidden="true">↗</span>
                    </span>
                    <span className={styles.partExcerpt}>{post.excerpt}</span>
                    <time className={styles.partYear} dateTime={post.date}>{year(post.date)}</time>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className={styles.older}>
          <h3 className={styles.olderTitle}>Antes</h3>
          <ul className={styles.olderList}>
            {rest.map((post) => (
              <li key={post.link}>
                <a
                  className={styles.olderItem}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={linkLabel(post.title)}
                >
                  <time className={styles.olderYear} dateTime={post.date}>{year(post.date)}</time>
                  <span className={styles.olderName}>
                    {post.title} <span className={styles.arr} aria-hidden="true">↗</span>
                  </span>
                  <span className={styles.olderExcerpt}>{post.excerpt}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.moreLine}>
          <a
            href={profile.social.medium}
            target="_blank"
            rel="noreferrer"
            aria-label="Mi perfil en Medium (se abre en otra pestaña)"
          >
            Seguirme en Medium <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Articulos;
