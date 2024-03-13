import PropTypes from 'prop-types';

const Gear = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className={className}>
      <path d="M512 287.504v-64l-76.496-31.872c-2.128-6-4.368-11.808-7.12-17.504l30.88-76.88-45.264-45.248-76.192 31.376c-5.808-2.816-11.744-5.184-17.872-7.376l-32.432-76h-64l-31.632 75.744c-6.368 2.256-12.496 4.624-18.56 7.504l-76.064-30.56-45.248 45.248 31.008 75.376c-3.008 6.192-5.44 12.496-7.76 19.008l-75.248 32.176v64l75.312 31.376c2.32 6.496 4.816 12.816 7.808 19.008l-30.432 75.872 45.248 45.248 75.568-31.12c6.064 2.88 12.256 5.184 18.624 7.376l32.368 75.744h64l31.68-76.128c6.064-2.256 12.064-4.624 17.808-7.376l76.752 30.752 45.248-45.248-31.504-76.368c2.688-5.744 4.88-11.568 7.008-17.504l76.512-32.624zM255.504 352c-52.992 0-96-43.008-96-96s43.008-96 96-96 96 43.008 96 96-43.008 96-96 96z"></path>
    </svg>
  );
};

Gear.propTypes = {
  className: PropTypes.string,
};

export default Gear;
