import TestRenderer from 'react-test-renderer';

import { preloadAll } from 'utils';
import { iconsName } from 'config';

import Icon from './Icon';

describe('Icon component', () => {
  it.each(Object.keys(iconsName))('with name %s should match snapshot', async (name) => {
    await preloadAll();
    const testRenderer = TestRenderer.create(<Icon name={name} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
  it('without name should match emty snapshot', () => {
    const testRenderer = TestRenderer.create(<Icon />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
