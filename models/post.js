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

	comments: [{
		text: String
	}]
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post