'use client';

import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import store from './store';

export const CustomProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

CustomProvider.propTypes = {
  children: PropTypes.node,
};
