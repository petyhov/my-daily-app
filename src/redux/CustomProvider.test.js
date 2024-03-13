import { getSnapshot } from 'utils';

import { CustomProvider } from './CustomProvider';

it('CustomProvider component should match snapshot ', () => {
  const snapshot = getSnapshot(
    <CustomProvider>
      <h3>mock child</h3>
    </CustomProvider>
  );
  expect(snapshot).toMatchSnapshot();
});
