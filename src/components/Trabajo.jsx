import projects from '../data/projects.json';
import styles from './Trabajo.module.css';

const Preview = ({ preview }) => (
  <figure className={styles.preview}>
    <figcaption className={styles.previewBar}>{preview.source}</figcaption>
    <div className={styles.previewCode} aria-hidden="true">
      {preview.lines.map((line, i) => {
        if (line.type === 'blank') return <div key={i}>&nbsp;</div>;
        return (
          <div key={i} className={styles[line.type] || ''}>
            {line.text}
          </div>
        );
      })}
    </div>
  </figure>
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
              están abiertas. Nacieron para resolver problemas de mi propio día a día.
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
                  aria-label={`Ver ${project.title} en GitHub (se abre en otra pestaña)`}
                >
                  Ver en GitHub <span className={styles.arr} aria-hidden="true">↗</span>
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
