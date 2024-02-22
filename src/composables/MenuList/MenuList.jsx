import styles from './styles.module.scss';

const MenuList = () => {
  return (
    <ul>
      <li>
        <button className={styles.btn}>
          <i className={`fa-solid fa-gear ${styles.test}`} />
        </button>
      </li>
    </ul>
  );
};

export default MenuList;
