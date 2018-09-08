import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { getGroups } from '../../actions/groupsActions';
import SideNavBtn from "../common/SideNavBtn";
import SearchBlock from "../common/SearchBlock";
import TaskItem from './TaskItem';


class Tasks extends Component {
	
	componentWillMount() {
		const groups = this.props.groups.length;
		if(!groups) {
			this.props.getGroups();
		}

	}

	render() {
		const subUrl = this.props.match.params.tasks;
		const groups = this.props.groups;

		groups.map(group => {
			const groupName = group.groupName.toLowerCase();
			if(groupName === subUrl) {
				console.log(group.tasks)
			}
		});

		return (
			<div className="list">
				<div className="page__title_small">
					<div className="nav__block">

						<SideNavBtn isDisabled={true} onClosePage={true}/>

						<div className="nav__control">
							<span className="list__total">{Object.keys(groups).length}</span>

							<a href="#" style={{display: 'none'}}>
								<i className="fas fa-share"> </i>
							</a>
						</div>

						<SearchBlock />

					</div>

					<h1>Shop</h1>
				</div>

				<div className="list__tasks">
					<ul>
						<TaskItem/>

						<button className="list__add" type="submit"><i className="fas fa-plus"></i></button>
					</ul>
				</div>
			</div>
		);
	}
}

Tasks.propTypes = {};

const mapStateToProps = (state)=> ({
	groups: state.groups.groups,
});

export default connect(mapStateToProps, { getGroups })(Tasks);
