import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import SideNavBtn from '../common/SideNavBtn';
import SideNav from '../sideNav/SideNav'
import GroupItem from './GroupItem';

class Groups extends Component {
	constructor() {
		super();

		this.state = {
			isActiveNavBar: false,
			groups: [
				{
					groupName: 'Shoping',
					totalTasks: 25,
					groupColor: '#50d2c2'
				},
				{
					groupName: 'Other',
					totalTasks: 45,
					groupColor: '#d2a811'
				},
				{
					groupName: 'Other',
					totalTasks: 45,
					groupColor: '#2dd200'
				},
				{
					groupName: 'Home',
					totalTasks: 15,
					groupColor: '#d21f56'
				},
			]
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			isActiveNavBar: nextProps.navBar.isActiveNavBar
		})
	}

	render() {
		return (
			<Fragment>
				<SideNav isActiveNavBar={this.state.isActiveNavBar}/>

				<div className="groups">
					<div className="page__title_small">
						<div className="nav__block">

							<SideNavBtn />

							<div className="search__block isActive">
								<input name="search"/>
								<i className="fas fa-search active"> </i>
							</div>

						</div>
						<h1>My Groups</h1>
					</div>

					<div className="groups__categories">
						<ul>
							//TODO render GroupItem
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

Groups.propTypes = {
	navBar: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	navBar: state.navBar,
});

export default connect(mapStateToProps)(Groups);
