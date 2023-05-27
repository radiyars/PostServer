const Post = require('../models/post')

const handleError = (res, error) => {
	res.status(500).json({ error })
}

const getPosts = (req, res) => {
	Post
		.find()
		.sort({ name: 1 })
		.then((posts) => {
			res
				.header("Access-Control-Allow-Origin", "*")
				.status(200)
				.json(posts)

		})
		.catch((err) => handleError(res, err))
}

const getPost = (req, res) => {
	Post
		.findByIdAndDelete(req.params.id)
		.then((result) => {
			res
				.status(200)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

const deletePost = (req, res) => {
	Post
		.findByIdAndDelete(req.params.id)
		.then((result) => {
			res
				.status(200)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

// const postPost = (req, res) => {
// 	const post = new Post(req.body)

// 	Post
// 		.save()
// 		.then((result) => {
// 			res
// 				.status(201)
// 				.json(result)
// 		})
// 		.catch((err) => handleError(res, err))
// }

// !--------------------------------------------

const postPost = (req, res) => {
	const post = new Post({
		name: req.body.name,
		imageSrc: req.file ? req.file.path : ''
	})

	post
		.save()
		.then((result) => {
			res
				.status(201)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

// ?----------------------------------------------

// const updatePost = (req, res) => {
// 	Post
// 		.findByIdAndUpdate(req.params.id, req.body)
// 		.then((result) => {
// 			res
// 				.status(200)
// 				.json(result)
// 		})
// 		.catch((err) => handleError(res, err))
// }

const updateImg = (req, res) => {
	const updated = {
		name: req.body.name
	}

	if (req.file) {
		updated.imageSrc = req.file.path
	}

	Post
		.findOneAndUpdate(
			{ _id: req.params.id },
			{ $set: updated },
			{ new: true })
		.then((result) => {
			res
				.status(200)
				.json(result)
		})
		.catch((err) => handleError(res, err))
}

module.exports = {
	getPosts: getPosts,
	getPost: getPost,
	deletePost: deletePost,
	postPost: postPost,
	// updatePost: updatePost,
	updateImg: updateImg,
}