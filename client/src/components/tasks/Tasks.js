import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { getGroups } from '../../actions/groupsActions';
import SideNavBtn from "../common/SideNavBtn";


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
				console.log(group)
			}
		});

		return (
			<div className="list">
				{console.log(this.props)}
				<div className="page__title_small">
					<div className="nav__block">
						<SideNavBtn isDisabled={true} onClosePage={true}/>

						<div className="nav__control">
							<span className="list__total">25</span>
							<a href="share.html">
								<i className="fas fa-share"> </i>
							</a>
						</div>

						<div className="search__block isActive">
							<input name="search"/>
							<i className="fas fa-search active"> </i>
						</div>

					</div>

					<h1>Shop</h1>
				</div>
				<div className="list__tasks">
					<ul>
						<li className="list__task"><a href="task.html">Todo this task</a></li>
						<li className="list__task"><a href="task.html">Todo this task</a></li>
						<li className="list__task list__task_done"><a href="task.html">Todo this task</a></li>
						<li className="list__task"><a href="task.html">Todo this task</a></li>
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
