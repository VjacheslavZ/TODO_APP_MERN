import React, { Component } from 'react';
import { connect } from 'react-redux'
import { find } from 'lodash';
import PropTypes from 'prop-types';

import { filterGroups } from '../../actions/filterActions';
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

		this.setState({
			textFilter: ''
		});
	};

	componentWillUnmount() {
		this.props.filterGroups('')
	}

	render() {
		const subUrl = this.props.match.params.tasks;
		const groups = this.props.groups;
		const dataGroup = find(groups, (group) => { return group.groupName.toLowerCase() === subUrl});
		const filteredItems = [];

		const filterText =  this.props.textFilter.toLocaleLowerCase();

		const showFilterResults = () => {
			if(filterText.length) {
				dataGroup.tasks.map(task => {
					const taksName = task.taskName.toLowerCase();
					if(taksName.includes(filterText)) {
						filteredItems.push(task)
					}
				});

				return(
					Object.keys(filteredItems).length ?
						filteredItems.map((task, i) => <TaskItem key={i} dataTask={task}/>)
						:
						<div>No matches</div>
				)
			} else {
				let tasks;
				groups.map(group => {
					const groupName = group.groupName.toLowerCase();

					if(groupName === subUrl) {
						tasks = group.tasks
					}
				});

				return (
					tasks.map((task, i) => <TaskItem dataTask={task} key={i}/>)
				)
			}
		};

		return (
			<div className="list">
				<div className="page__title_small">
					<div className="nav__block">

						<SideNavBtn isDisabled={true} onClosePage={true}/>

						<div className="nav__control">
							<span className="list__total">
								{this.props.dataGroup ? this.props.dataGroup.tasks.length : null}
							</span>

							<a href="#" style={{display: 'none'}}>
								<i className="fas fa-share"> </i>
							</a>
						</div>

						<SearchBlock />

					</div>

					<h1>{dataGroup !== undefined ? dataGroup.groupName : ''}</h1>
				</div>

				<div className="list__tasks">
					<ul>
						{this.props.groups.length ?
								showFilterResults(groups) : (<div>No task</div>)
						}

						<button className="list__add" type="submit">
							<i className="fas fa-plus"> </i>
						</button>
					</ul>
				</div>
			</div>
		);
	}
}

Tasks.propTypes = {};

const mapStateToProps = (state)=> ({
	groups: state.groups.groups,
	// dataGroup: state.groups.dataGroup,
	textFilter: state.groups.textFilter
});

export default connect(mapStateToProps, { getGroups, filterGroups})(Tasks);
