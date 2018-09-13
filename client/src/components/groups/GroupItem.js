import React from 'react';
import { Link } from 'react-router-dom';

const GroupItem  = ({group}) => {
	const {groupName, groupColor, tasks} = group;
	const groupNameUrl = groupName.toLowerCase();

	return (
		<li className="groups__item">
			<Link to={`groups/${groupNameUrl}`}>
				<span className="group__name">{groupName}</span>
				<span className="group__count">{Object.keys(tasks).length || 'No tasks'}</span>
				<span className="group__color"
				      style={{ backgroundColor: groupColor }}>
				</span>
			</Link>
		</li>
	);
};

export default GroupItem;