const express = require('express')
const router = express.Router()
const {registerUser,getUsers,loginUser,getMe}=require('../controllers/userController')

const {protect}=require('../middleware/authMiddleware')

// Support the conventional endpoint as well as the existing /register URL.
router.post('/',registerUser)
router.post('/login',loginUser)
router.get('/me',protect,getMe) 

module.exports = router 

