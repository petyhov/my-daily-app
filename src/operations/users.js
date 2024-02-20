import { fetchData } from 'helpers';
import { api } from 'config';

export const getUsers = async () => {
  const users = await fetchData(api.users);
  return users.existingUsers;
};
