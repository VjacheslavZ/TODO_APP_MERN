const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Groups Model
const Groups = require('../../models/Groups');
//Load User Model
const User = require('../../models/User');

//@Route   POST api/groups/group
//@desc    Add group to profile
//@access  Private
router.post('/group', passport.authenticate('jwt', { session: false}), (req, res) => {
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

});


module.exports = router;