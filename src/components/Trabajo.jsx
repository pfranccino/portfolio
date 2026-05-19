import projects from '../data/projects.json';
import styles from './Trabajo.module.css';

const Preview = ({ preview }) => (
  <div className={styles.preview} aria-hidden="true">
    <div className={styles.previewDots} />
    {preview.lines.map((line, i) => {
      if (line.type === 'blank') return <div key={i}>&nbsp;</div>;
      return (
        <div key={i} className={styles[line.type] || ''}>
          {line.text}
        </div>
      );
    })}
  </div>
);

const Trabajo = () => {
  return (
    <section className="sec" id="trabajo">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">03 / Trabajo</div>
          <div>
            <h2 className="sec-title">
              Lo que <span className="muted">puedo mostrar.</span>
            </h2>
            <p className="sec-lede">
              Mis apps de trabajo son privadas, pero las herramientas que construyo para mí
              están abiertas. Pequeñas, útiles, escritas para escalar mi propio día.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.id} className={styles.work}>
              <div className={styles.text}>
                <div className={styles.kicker}>{project.kicker}</div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className={styles.link}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Ver ${project.title} en GitHub`}
                >
                  Ver en GitHub <span className={styles.arr}>↗</span>
                </a>
              </div>
              <Preview preview={project.preview} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trabajo;
