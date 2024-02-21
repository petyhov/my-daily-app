'use client';
import { useRouter } from 'next/navigation';

import { routes } from 'config';

import styles from './styles.module.scss';

const UsersList = ({ users }) => {
  const router = useRouter();

  const userHandler = () => {
    router.push(routes.home);
  };

  return (
    <div className={styles.list}>
      {users.map((user) => (
        <button key={user._id} className={styles.item} onClick={userHandler}>
          {user.name}
        </button>
      ))}
    </div>
  );
};

export default UsersList;
