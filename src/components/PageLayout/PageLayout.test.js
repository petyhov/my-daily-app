import { getSnapshot } from 'utils';

import PageLayout from './PageLayout';

it('PageLayout component should match snapshot ', () => {
  const snapshot = getSnapshot(
    <PageLayout title="test title" verticalCenter>
      <h4>test childrens</h4>
    </PageLayout>
  );
  expect(snapshot).toMatchSnapshot();
});
