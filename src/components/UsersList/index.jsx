import styles from './styles.module.scss';

const UsersList = ({ users }) => {
  return (
    <div className={styles.list}>
      {users.map((user) => (
        <button key={user._id} className={styles.item}>
          {user.name}
        </button>
      ))}
    </div>
  );
};

export default UsersList;
