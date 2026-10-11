import stack from '../data/stack.json';
import styles from './Stack.module.css';

const Stack = () => {
  return (
    <section className="sec" id="stack">
      <div className="wrap">
        <div className="sec-head">
          <h2 className="sec-title">Con qué construyo.</h2>
          <p className="sec-lede">
            Casi todo mi día pasa en Kotlin y Compose. Lo demás cambia con cada proyecto.
          </p>
        </div>

        <div className={styles.grid}>
          {stack.map((col) => (
            <div key={col.category} className={styles.col}>
              <h3 className={styles.colTitle}>{col.category}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    {item.note && <small>{item.note}</small>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
