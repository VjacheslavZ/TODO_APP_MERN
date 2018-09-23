import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { find, has } from 'lodash';
import PropTypes from 'prop-types';

import { filterGroups } from '../../actions/filterActions';
import { getGroups } from '../../actions/groupsActions';

import SideNavBtn from "../common/SideNavBtn";
import SearchBlock from "../common/SearchBlock";
import TaskItem from './TaskItem';
import BtnAdd from '../common/BtnAdd'

class Tasks extends Component {
	componentWillMount() {
		const {groups, getGroups} = this.props;
		if(!groups.length) {
			getGroups();
		}

		this.setState({
			textFilter: ''
		});
	};

	componentWillUnmount() {
		this.props.filterGroups('')
	}

	render() {
		const subUrl = this.props.match.params.tasks;
		const { groups } = this.props;

		let dataGroup = {};
		dataGroup = find(groups, group => group.groupName.toLowerCase() === subUrl);

		let tasks = [];
		if(has(dataGroup, 'tasks')) tasks = dataGroup.tasks;

		const filteredItems = [];
		const filterText =  this.props.textFilter.toLocaleLowerCase();

		const showFilterResults = () => {
			if(filterText.length) {
				dataGroup.tasks.map(task => {
					const taksName = task.taskName.toLowerCase();

					taksName.includes(filterText) && filteredItems.push(task)
				});

				return (
					filteredItems.length ?
						filteredItems.map(task => <TaskItem key={task.id} dataTask={task}/>)
						:
						<div>No matches</div>
				)
			} else {
				let tasks;
				groups.map(group => {
					const groupName = group.groupName.toLowerCase();
					groupName === subUrl ?
						tasks = group.tasks : null
				});

				return (
					tasks.map(task => <TaskItem dataTask={task} key={task.id}/>)
				)
			}
		};

		return (
			<div className="list">
				<div className="page__title_small">
					<div className="nav__block">

						<SideNavBtn isDisabled={true} onClosePage={true}/>

						<div className="nav__control">
							<span className="list__total">{tasks.length}</span>

							<a href="#" style={{display: 'none'}}>
								{/*TODO in future*/}
								<i className="fas fa-share"> </i>
							</a>
						</div>

						<SearchBlock />
					</div>

					<h1>{dataGroup && dataGroup.groupName}</h1>
				</div>

				<div className="list__tasks">
					<ul>
						{groups.length && showFilterResults(groups)}
						<Link to={`/groups/add_new_task/${subUrl}`}>
							<BtnAdd/>
						</Link>

					</ul>
				</div>
			</div>
		);
	}
}

Tasks.propTypes = {};

const mapStateToProps = (state)=> ({
	groups: state.groups.groups,
	dataGroup: state.groups.dataGroup,
	textFilter: state.groups.textFilter
});

export default connect(mapStateToProps, { getGroups, filterGroups})(Tasks);
