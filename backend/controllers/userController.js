 //@desccribe Register new user
 // @route POST /api/users
 // @access Public

const registerUser = (req,res)=> {
    res.json({message:"Register User"})
}

//@desccribe Login user
// @route POST /api/users/login
// @access Public
const loginUser =(req,res)=>{
    res.json({message:"Login User"})
}

//@desccribe Get user data
// @route GET /api/users/me
// @access Private
const getMe =(req,res)=>{
    res.json({message:"Get User Data"})
}

module.exports ={
    registerUser,
    loginUser,
    getMe,
}