'use server';
import { PageLayout } from 'components';
import { UsersList } from 'composables';
import { getUsers } from 'operations';

const Users = async () => {
  const users = await getUsers();

  return (
    <PageLayout verticalCenter>
      <UsersList users={users} />
    </PageLayout>
  );
};

export default Users;
