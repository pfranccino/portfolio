import profile from '../data/profile.json';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section className="sec" id="experiencia">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Por dónde he pasado.</h2>
        </div>

        <ol className={styles.list}>
          {profile.experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className={`${styles.item} ${job.current ? styles.current : ''}`}>
              <div className={styles.period}>{job.period}</div>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <div className={styles.company}>{job.company}</div>
              </div>
              <p className={styles.desc}>{job.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
