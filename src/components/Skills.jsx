import skills from '../data/skills.json';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section className="sec" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Skills para Claude Code.</h2>
          <p className="sec-lede">
            Dos de mis herramientas también vienen como skill. Claude corre la herramienta
            por ti y te explica lo que encontró.
          </p>
        </div>

        <ul className={styles.list}>
          {skills.map((skill) => (
            <li key={skill.id} className={styles.skill}>
              <div className={styles.text}>
                <h3 className={styles.name}>{skill.name}</h3>
                <a
                  className={styles.repo}
                  href={skill.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Repositorio ${skill.repo} en GitHub (se abre en otra pestaña)`}
                >
                  github.com/pfranccino/{skill.repo} <span aria-hidden="true">↗</span>
                </a>
                <p className={styles.desc}>{skill.description}</p>
                <p className={styles.trigger}>{skill.trigger}</p>
              </div>

              <figure className={styles.install}>
                <figcaption className={styles.installLabel}>{skill.install.source}</figcaption>
                <code className={styles.command}>{skill.install.command}</code>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
