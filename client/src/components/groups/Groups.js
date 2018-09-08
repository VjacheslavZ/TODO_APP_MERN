import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getGroups } from '../../actions/groupsActions';

import PropTypes from 'prop-types';

import SideNavBtn from '../common/SideNavBtn';
import SideNav from '../sideNav/SideNav'
import GroupItem from './GroupItem';
import SearchBlock from '../common/SearchBlock';

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
		const groups = this.props.groups;
		const filterText =  this.props.textFilter.toLocaleLowerCase();
		const filteredItems = [];

		const showFilterResults= () => {
			if(filterText.length) {
				groups.map(group => {
					const groupName = group.groupName.toLocaleLowerCase();

					if(groupName.includes(filterText)){
						filteredItems.push(group)
					}
				});

				return(
					Object.keys(filteredItems).length ?
						filteredItems.map((group, i) => <GroupItem key={i} group={group}/>)
						:
						<div>No matches</div>
				)
			} else {
				return(
					groups.map((group, i) => <GroupItem key={i} group={group}/>)
				)
			}
		};

		return (
			<Fragment>
				<SideNav isActiveNavBar={this.state.isActiveNavBar}/>
				<div className="groups">
					<div className="page__title_small">
						<div className="nav__block">
							<SideNavBtn />
							<SearchBlock />
						</div>
						<h1>My Groups</h1>
					</div>

					<div className="groups__categories">
						<ul>
							{this.props.groups.length ?
								showFilterResults(groups) : (<div>No groups</div>)
							}
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
	groups: state.groups.groups,
	textFilter: state.groups.textFilter
});

export default connect(mapStateToProps, { getGroups })(Groups);
