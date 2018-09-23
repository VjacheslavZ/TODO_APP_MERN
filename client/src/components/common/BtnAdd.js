import React from 'react';
import PropTypes from 'prop-types';

const BtnAdd = ({type}) =>
	(<button className="list__add" type={type}>
		<i className="fas fa-plus"> </i>
	</button>);

BtnAdd.propTypes ={
	type: PropTypes.string
};

export default BtnAdd;