import { getSnapshot } from 'utils';

import MenuList from './MenuList';

it('MenuList component should match snapshot ', () => {
  const snapshot = getSnapshot(<MenuList />);
  expect(snapshot).toMatchSnapshot();
});
