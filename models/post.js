const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	imageSrc: {
		type: String,
		default: ''
	},

	likes: {
		type: Number,
		default: 0
	},

	comments: [
		String
	]

})

const Post = mongoose.model('Post', postSchema)

module.exports = Post