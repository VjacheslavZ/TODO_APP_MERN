import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GroupItem  extends Component {
	render() {
		const {groupName, totalTasks, groupColor} = this.props.group;

		return (
			<li className="groups__item">
				<Link to={groupName}>
					<span className="group__name">{groupName}</span>
					<span className="group__count">{totalTasks}</span>
					<span className="group__color" style={{
						backgroundColor: groupColor
					}}> </span>
				</Link>
			</li>
		);
	}
}

export default GroupItem;