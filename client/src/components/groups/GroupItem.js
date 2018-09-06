import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GroupItem  extends Component {
	render() {
		const {groupName, groupColor, tasks} = this.props.group;
		const groupNameUrl = groupName.toLowerCase();

		return (
			<li className="groups__item">
				<Link to={`groups/${groupNameUrl}`}>
					<span className="group__name">{groupName}</span>
					<span className="group__count">{Object.keys(tasks).length || 'No tasks'}</span>
					<span className="group__color" style={{
						backgroundColor: groupColor
					}}> </span>
				</Link>
			</li>
		);
	}
}

export default GroupItem;