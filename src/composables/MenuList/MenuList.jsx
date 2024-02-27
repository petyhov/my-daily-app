import { Icon } from 'components';

import { iconsName } from 'config';

import styles from './styles.module.scss';

const MenuList = () => {
  return (
    <ul>
      <li>
        <button className={styles.btn}>
          <Icon name={iconsName.GEAR} />
        </button>
      </li>
    </ul>
  );
};

export default MenuList;
