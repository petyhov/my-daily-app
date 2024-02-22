import { cn } from 'helpers';

import styles from './styles.module.scss';

const PageLayout = ({ title, verticalCenter, children }) => {
  return (
    <div className={cn(styles.pageContainer, verticalCenter && styles.verticalCenter)}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
};

export default PageLayout;
