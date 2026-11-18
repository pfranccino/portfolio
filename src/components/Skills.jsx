import skills from '../data/skills.json';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Skills para Claude Code.</h2>
          <p className="sec-lede">
            Un plugin para construir features Android capa por capa, y{' '}
            <span className={styles.nowrap}>android-module-map</span>, que también viene como skill.
          </p>
        </div>

        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill.id} className={styles.skill}>
              <div className={styles.text}>
                <h3 className={styles.name}>{skill.name}</h3>
                <div className={styles.links}>
                  <a
                    className={styles.repo}
                    href={skill.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`github.com/pfranccino/${skill.repo} (se abre en otra pestaña)`}
                  >
                    github.com/pfranccino/{skill.repo} <span className={styles.arr} aria-hidden="true">↗</span>
                  </a>
                  {skill.guide && (
                    <a
                      className={`${styles.repo} ${styles.guide}`}
                      href={skill.guide}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Guía de uso (se abre en otra pestaña)"
                    >
                      Guía de uso <span className={styles.arr} aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
                <p className={styles.desc}>{skill.description}</p>
                <p className={styles.trigger}>{skill.trigger}</p>
              </div>

              <figure className={styles.install}>
                <figcaption className={styles.installLabel}>{skill.install.source}</figcaption>
                <code className={styles.command}>
                  {skill.install.commands.map((command) => (
                    <span key={command} className={skill.install.shell ? styles.shell : styles.line}>
                      {command}
                    </span>
                  ))}
                </code>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
