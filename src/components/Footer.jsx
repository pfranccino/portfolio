import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.row}`}>
        <span>© {new Date().getFullYear()} Paul Franccino Ayala</span>
        <span>Santiago · Chile · CL</span>
        <span>pfranccino.dev</span>
      </div>
    </footer>
  );
};

export default Footer;
