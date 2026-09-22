 const bcrypt = require('bcryptjs')
 const asyncHandler=require('express-async-handler')
 const userModel= require('../models/userModel')
 
 
 
 //@desccribe Register new user
 // @route POST /api/users
 // @access Public

const registerUser = asyncHandler(async(req,res)=> {
    const{name,email,password} = req.body
    
    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all the field")
    }

    //Check if the user Exist
    const userExists= await userModel.findOne({email})

    if(userExists){
    res.status(400)
    throw new Error("User already exists")
    }
    //Hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    //Create User
    const user= await userModel.create({
        name,email,password:hashedPassword
    })

    if (user) {
        res.status(201).json({
        _id:user._id,name:user.name,email:user.email 
        })}
        else
            {
                res.status(400)
                throw new Error("Invalid user data")
            }
    })

const getUsers = asyncHandler(async (req, res) => {
    const users = await userModel.find().select('-password')
    res.status(200).json(users)
})

//@desccribe Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"Login User"})
})

//@desccribe Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async(req,res)=>{
    res.json({message:"Get User Data"})
})

module.exports ={
    registerUser,
    getUsers,
    loginUser,
    getMe,
}
