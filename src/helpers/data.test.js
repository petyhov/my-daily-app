import axios from 'axios';
import { makeFetch } from './data';

const someHost = 'someHost';
const someUrl = '/someUrl';
const dataResult = 'some data result';
const originalEnv = process.env;

jest.mock('next/headers', () => ({
  headers: () => ({
    get: () => 'someHost',
  }),
}));

jest.mock('axios');

describe('DataHelpers component', () => {
  axios.mockReturnValue({ data: dataResult });

  it('should makeFetch with correct url and data in server build', async () => {
    await makeFetch(someUrl);
    expect(axios).toHaveBeenCalledWith('https://' + someHost + someUrl);
  });

  it('should makeFetch with correct url and data in local build', async () => {
    process.env = {
      ...originalEnv,
      LOCAL_BUILD: 'true',
    };
    const result = await makeFetch(someUrl);
    expect(axios).toHaveBeenCalledWith('http://' + someHost + someUrl);
    expect(result).toEqual(dataResult);
  });
});
