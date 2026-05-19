import profile from '../data/profile.json';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className="sec" id="experiencia">
      <div className="wrap">
        <div className="sec-head">
          <div className="sec-num">04 / Experiencia</div>
          <div>
            <h2 className="sec-title">
              Por dónde<br /><span className="muted">he pasado.</span>
            </h2>
          </div>
        </div>

        <div className={styles.timeline}>
          {profile.experience.map((job, i) => (
            <div key={i} className={`${styles.item} ${job.current ? styles.current : ''}`}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <div className={styles.role}>
                  <h4 className={styles.roleTitle}>{job.role}</h4>
                  <div className={styles.company}>{job.company}</div>
                  <p className={styles.desc}>{job.description}</p>
                </div>
                <div className={styles.period}>{job.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
