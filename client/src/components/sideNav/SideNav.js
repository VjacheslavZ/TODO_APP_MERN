import React, { Component } from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';

const SideNav =({isActiveNavBar}) => {
	return (
		<div className={classnames('bg_nav', {'active': isActiveNavBar})}>
			<div className="sidenav">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="register.html">register</a></li>
					<li><a href="login.html">login</a></li>
					<li><a href="create.html">create</a></li>
					<li><a href="groups.html">groups</a></li>
					<li><a href="list.html">list</a></li>
					<li><a href="time_line.html">time line</a></li>
				</ul>
			</div>
		</div>
	)
};

SideNav.propTypes = {};

export default SideNav;
