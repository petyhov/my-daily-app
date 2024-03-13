import { getSnapshot } from 'utils';

import Header from './Header';

it('Header component should match snapshot ', () => {
  const snapshot = getSnapshot(<Header />);
  expect(snapshot).toMatchSnapshot();
});
