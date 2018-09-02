const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Groups Model
const Groups = require('../../models/Groups');
//Load User Model
const User = require('../../models/User');

//@Route   GET api/groups/
//@desc    GET group profile
//@access  Private
router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
	/*Todo remove hardCoe*/
	const groups = [
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
	];

	res.json(groups);
});


//@Route   POST api/groups/group
//@desc    Add group to profile
//@access  Private
router.post('/', passport.authenticate('jwt', { session: false}), (req, res) => {
	/*Todo this part*/
	/*
	User.findOne({ _id: req.user._id })
		.then(user => {
			//Create other groups
			Groups.findOne({user: req.user._id})
				.then(group => {
					if(group) {
						//Update
						Groups.findOneAndUpdate({
							groupName: req.body.groupName,
						}).then(group => res.json(group) );

						// const newGroup = {
						// 	 groupName: req.body.groupName,
						// };

						// group.groupsName.push(newGroup);
						// group.save().then(group => res.json(group))
					} else {
						//Create first group
						const newGroup = new Groups({
							user: req.user._id,
							groupsName: {
								groupName: req.body.groupName
							}
						});
						newGroup.save().then(group => res.json(group))
					}
				})
				.catch(err => res.status(404).json(err))

			//Create first group
			// const newGroup = new Groups({
			// 	user: req.user._id,
			// 	groupsName: {
			// 		groupName: req.body.groupName
			// 	}
			// });
			// newGroup.save().then(group => res.json(group))
		})
	*/
});


module.exports = router;