import dynamic from 'next/dynamic';

import { iconsName } from 'config';

import styles from './styles.module.scss';

const Icon = ({ name }) => {
  const ImageComponents = {
    [iconsName.GEAR]: dynamic(() => import(/* webpackChunkName: "GearIcon" */ './Gear')),
  };

  const ImageComponent = ImageComponents[name];

  return <ImageComponent className={styles.icon} />;
};

export default Icon;
