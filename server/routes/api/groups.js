const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


//Load Groups Model
const Groups = require('../../models/Groups');
//Load User Model
const User = require('../../models/User');

/*Todo remove hardCoe*/
let groups = [
	{
		groupName: 'Shoping',
		groupId: 'Shoping',
		groupColor: '#50d2c2',
		tasks: [
			{
				id: 1,
				taskName: 'Task 1',
				isDone: false,
				taskDescpiption: 'text 3'
			},
			{
				id: 2,
				taskName: 'Task 2',
				isDone: true,
				taskDescpiption: 'text 2'
			},
		]
	},
	{
		groupName: 'Other',
		groupId: 'Other',
		groupColor: '#d2a811',
		tasks: [
			{
				id: 3,
				taskName: 'Go to cinema',
				isDone: true,
				taskDescpiption: 'Watch movie'
			},
			{
				id: 4,
				taskName: 'Buy phone',
				isDone: false,
				taskDescpiption: 'Buy phone in lorem'
			},
		]
	},
	{
		groupName: 'Home',
		groupId: 'Home',
		groupColor: '#d21f56',
		tasks: []
	},
];

//@Route   GET api/groups/
//@desc    GET group profile
//@access  Private
router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
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

//@Route   POST /api/groups/toggleDone
//@desc    Toggle status off task
//@access  Private
router.post('/toggleDone', passport.authenticate('jwt', { session: false}), (req, res) => {
	const { taskId, isDone } = req.body;

	groups.forEach(group => {
		group.tasks.forEach(task => {
			if(task.id === taskId) {
				task.isDone = !isDone;
			}
		})
	});

	res.json(groups)
});

module.exports = router;