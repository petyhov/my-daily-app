import { getServerSnapshot } from 'utils';

import LoginPage from './page';

jest.mock('operations', () => ({ getUsers: () => ['test user 1', 'test user 2'] }));

describe('LoginPage component', () => {
  it('should match snapshot ', async () => {
    const snapshot = await getServerSnapshot(LoginPage);
    expect(snapshot).toMatchSnapshot();
  });
});
