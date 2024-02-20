'use server';
import { UsersList } from 'components';
import { getUsers } from 'operations';

const Users = async () => {
  const users = await getUsers();

  return <UsersList users={users} />;
};

export default Users;
