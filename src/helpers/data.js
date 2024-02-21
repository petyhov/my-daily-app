import { headers } from 'next/headers';
import axios from 'axios';

export const makeFetch = async (url) => {
  const host = headers().get('host');
  const data = await axios(`http://${host}${url}`);
  return data.data;
};
