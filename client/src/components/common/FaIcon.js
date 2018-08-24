import React from 'react';
import PropTypes from 'prop-types';

const FaIcon = ({faClass}) => {
	return (
		<i className={`fas ${faClass}`}> </i>
	)
};

FaIcon.propTypes = {
	faClass: PropTypes.string.isRequired,
};

export default FaIcon;