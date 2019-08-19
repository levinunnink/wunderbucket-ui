import React from 'react';
import PropTypes from 'prop-types';

const Site = ({ site }) => <div className="site">{site}</div>;

Site.propTypes = {
  site: PropTypes.shape(),
};

export default Site;
