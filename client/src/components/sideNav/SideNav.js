import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import PropTypes from 'prop-types';

class SideNav extends Component {
	constructor(){
		super();
	}

	render(){
		const isActive = this.props.isActiveNavBar;

		return (
			<div className={classnames('bg_nav', {'active': isActive})}>
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
	}
};

SideNav.propTypes = {
	//TODO
};

export default SideNav;
