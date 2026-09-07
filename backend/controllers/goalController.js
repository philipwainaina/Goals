const asyncHandler = require("express-async-handler") //import the express-async-handler module to handle errors in asynchronous functions
//@desc Get all goals
//@route GET /api/goals
//@ccess Private  
const getGoal = asyncHandler(async (req, res) => {                    //create a function called getGoals 
  res.status(200).json({ message: "Get  goal" })   //send a response with satus code 200 and message "Get goal" in json format
})

//@desc Set  goal
//@route POST /api/goals
//@ccess Private
const setGoal = asyncHandler(async (req, res) => { //create a function called setGoals
  res.status(200).json({ message: "Set  goal" }) //send a response with satus code 200 and message "Set goal" in json format
})

//@desc Update  goal
//@route PUT /api/goals/:id
//@ccess Private
const updateGoal = asyncHandler(async (req, res) => {  //create a function called updateGoals
  res.status(200).json({ message: `Update  goal,${req.params.id}`}) //send a response with satus code 200 and message "Update goal" in json format with the id of the goal to be updated
})

//@desc DELETE  goals
//@route DELETE /api/goals/:id
//@ccess Private
const deleteGoal = asyncHandler(async (req, res) => {   //create a function called deleteGoals
  res.status(200).json({ message: `Delete  goal,${req.params.id}`}) //send a response with satus code 200 and message "Delete goal" in json format with the id of the goal to be deleted
})




module.exports={
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
} 