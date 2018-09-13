import React from 'react';
import PropTypes from 'prop-types';

const FaIcon = ({faClass}) => (<i className={`fas ${faClass}`}> </i>);

FaIcon.propTypes = {
	faClass: PropTypes.string.isRequired,
};

export default FaIcon;