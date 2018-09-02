import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getGroups } from '../../actions/groupsActions';

import PropTypes from 'prop-types';

import SideNavBtn from '../common/SideNavBtn';
import SideNav from '../sideNav/SideNav'
import GroupItem from './GroupItem';

class Groups extends Component {
	constructor() {
		super();

		this.state = {
			isActiveNavBar: false,
		}
	}

	componentWillMount() {
		this.props.getGroups();
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
	groups: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	navBar: state.navBar,
	groups: state.groups.groups
});

export default connect(mapStateToProps, { getGroups })(Groups);
