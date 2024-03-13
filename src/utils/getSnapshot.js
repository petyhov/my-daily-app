import ShallowRenderer from 'react-test-renderer/shallow';

export const getSnapshot = (Component) => {
  const renderer = new ShallowRenderer();
  renderer.render(Component);
  return renderer.getRenderOutput();
};

export const getServerSnapshot = async (Component) => {
  const renderer = new ShallowRenderer();
  renderer.render(await Component());
  return renderer.getRenderOutput();
};
