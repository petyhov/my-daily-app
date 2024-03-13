import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

import { iconsName } from 'config';

import styles from './styles.module.scss';

const GearComponent = dynamic(() => import(/* webpackChunkName: "GearIcon" */ './Gear'));

const Icon = ({ name }) => {
  switch (name) {
    case iconsName.GEAR:
      return <GearComponent className={styles.icon} />;
    default:
      break;
  }
};

Icon.propTypes = {
  name: PropTypes.string,
};

export default Icon;
