'use client';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import { userActions } from '../../redux/user';
import { routes } from 'config';

import styles from './styles.module.scss';

const UsersList = ({ users }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userHandler = (e) => {
    const { userId } = e.target.dataset;
    const currentUser = users.find((user) => user._id === userId);
    dispatch(userActions.setUserData(currentUser));
    router.push(routes.home);
  };

  return (
    <div className={styles.list}>
      {users.map((user) => (
        <button key={user._id} data-user-id={user._id} className={styles.item} onClick={userHandler}>
          {user.name}
        </button>
      ))}
    </div>
  );
};

export default UsersList;
