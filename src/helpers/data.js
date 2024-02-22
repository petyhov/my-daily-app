'use server';
import { headers } from 'next/headers';
import axios from 'axios';

export const makeFetch = async (url) => {
  const localBuild = process.env.LOCAL_BUILD === 'true';
  const protocol = localBuild ? 'http' : 'https';
  const host = headers().get('host');
  const data = await axios(`${protocol}://${host}${url}`);
  return data.data;
};
