import { makeFetch } from 'helpers';
import { api } from 'config';

export const getUsers = async () => {
  const users = await makeFetch(api.users);
  return users.existingUsers;
};
