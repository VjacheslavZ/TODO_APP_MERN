const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	groupsName: [
		{
			date: {
				type: Date,
				default: Date.now
			},
			groupName: {
				type: String,
				required: true
			},
			// tasks: [
			// 	{
			// 		title: {
			// 			type: String,
			// 			required: true,
			// 		},
			// 		shortDescription: {
			// 			type: String,
			// 			required: true,
			// 		},
			// 		location: {
			// 			place: String,
			// 		},
			// 		date_from: {
			// 			type: Date,
			// 			required: true
			// 		},
			// 		date_to: {
			// 			type: Date,
			// 			required: true
			// 		}
			// 	}
			// ]
		}
	]
});
//Create a model
module.exports = Group = mongoose.model('group', ProfileSchema);