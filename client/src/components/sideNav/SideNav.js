import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import PropTypes from 'prop-types';

const SideNav = (props) => {
	const {isActiveNavBar} = props;

	return (
		<div className={classnames('bg_nav', {'active': isActiveNavBar})}>
			<div className="sidenav">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/create">Create</Link>
					</li>
					<li>
						<Link to="/groups">Groups</Link>
					</li>
					<li>
						<Link to="/list">All tasks</Link>
					</li>
					<li>
						<Link to="/time_line">Time line</Link>
					</li>
				</ul>
			</div>
		</div>
	)
};

SideNav.propTypes = {
	isActiveNavBar: PropTypes.bool.isRequired
};

export default SideNav;
