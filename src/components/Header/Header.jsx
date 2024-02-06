import { Caveat } from 'next/font/google';

import { concatClassNames as cn } from '@/helpers';

import styles from './styles.module.scss';

const caveat = Caveat({ subsets: ['latin'] });

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={cn(caveat.className, styles.logo)}>MyDailyApp</p>
    </header>
  );
};

export default Header;
