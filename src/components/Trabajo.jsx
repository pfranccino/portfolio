import groups from '../data/projects.json';
import profile from '../data/profile.json';
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
          <h2 className="sec-title">Lo que puedo mostrar.</h2>
          <p className="sec-lede">
            Mis apps de trabajo son privadas, pero las herramientas que construyo están
            abiertas. Son dos pares: uno para las dependencias y otro para la arquitectura.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.group} className={styles.group}>
            <div className={styles.groupHead}>
              <h3 className={styles.groupName}>{group.group}</h3>
              <p className={styles.question}>{group.question}</p>
            </div>

            <div className={styles.pair}>
              {group.projects.map((project) => (
                <article key={project.id} className={styles.work}>
                  <div className={styles.kicker}>{project.kicker}</div>
                  <h4 className={styles.title}>{project.title}</h4>
                  <p className={styles.desc}>{project.description}</p>
                  <a
                    className={styles.link}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver ${project.title} en GitHub (se abre en otra pestaña)`}
                  >
                    Ver en GitHub <span className={styles.arr} aria-hidden="true">↗</span>
                  </a>
                  <Preview preview={project.preview} />
                </article>
              ))}
            </div>
          </div>
        ))}

        <p className={styles.note}>
          android-gradle-analyzer también viene como skill para Claude Code en{' '}
          <a
            href={profile.social.skills}
            target="_blank"
            rel="noreferrer"
            aria-label="pfranccino-dev-skills en GitHub (se abre en otra pestaña)"
          >
            pfranccino-dev-skills <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Trabajo;
