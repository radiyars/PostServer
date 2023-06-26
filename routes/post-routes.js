const express = require('express')
const { getPost, deletePost, postPost, updateImg, updatePost } = require('../controllers/post-controller')
const upload = require('../middleware/upload')


const router = express.Router()



router.get('/api/post', getPost)
router.get('/api/post/images/:id', getPost)
router.delete('/api/post/images/:id', deletePost)
router.post('/api/post/image', upload.single('image'), postPost)
router.patch('/api/post/name/:id', updatePost)
router.patch('/api/post/likes/:id', updatePost)
router.patch('/api/post/image/:id', upload.single('image'), updateImg)


module.exports = router