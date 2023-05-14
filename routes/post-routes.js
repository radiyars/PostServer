const express = require('express')
const { getPosts, getPost, deletePost, postPost, updatePost } = require('../controllers/post-controller')
const upload = require('../middleware/upload')


const router = express.Router()



router.get('/api/images', getPosts)
router.get('/api/images/:id', getPost)
router.delete('/api/images/:id', deletePost)
router.post('/api/images', upload.single('image'), postPost)
router.patch('/api/images/:id', upload.single('image'), updatePost)


module.exports = router