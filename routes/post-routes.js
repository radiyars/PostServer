const express = require('express')
const { getPost, updateImg, updatePost } = require('../controllers/post-controller')
const upload = require('../middleware/upload')


const router = express.Router()



router.get('/api/post', getPost)
router.patch('/api/post/name/:id', updatePost)
router.patch('/api/post/likes/:id', updatePost)
router.patch('/api/post/comments/:id', updatePost)
router.patch('/api/post/image/:id', upload.single('image'), updateImg)
router.post('/api/post/image/:id', upload.single('image'), postImage)

module.exports = router