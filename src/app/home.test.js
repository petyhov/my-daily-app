import { getSnapshot } from 'utils';

import HomePage from './page';

it('HomePage component should match snapshot ', () => {
  const snapshot = getSnapshot(<HomePage />);
  expect(snapshot).toMatchSnapshot();
});
