import PropTypes from 'prop-types';

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

PageLayout.propTypes = {
  title: PropTypes.string,
  verticalCenter: PropTypes.bool,
  children: PropTypes.node,
};

export default PageLayout;
