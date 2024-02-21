import styles from './styles.module.scss';

const PageWithTitle = ({ title, children }) => {
  return (
    <main className={styles.pageContainer}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </main>
  );
};

export default PageWithTitle;
