import { getSnapshot } from 'utils';

import Layout from './layout';

it('Layout component should match snapshot ', () => {
  const snapshot = getSnapshot(
    <Layout>
      <h3>test children</h3>
    </Layout>
  );
  expect(snapshot).toMatchSnapshot();
});
