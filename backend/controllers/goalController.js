const asyncHandler = require("express-async-handler") 
const Goal = require("../models/goalModel") 
const User = require("../models/userModel")





//@desc Get all goals
//@route GET /api/goals
//@ccess Private  
const getGoal = asyncHandler(async (req, res) => {  //create a function called getGoals 
  const goals = await Goal.find({user: req.user.id}) //find all goals in the database
  res.status(200).json(goals)   //send a response with satus code 200 and the found goals in json format
})


//@desc Set  goal
//@route POST /api/goals
//@ccess Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body?.text){
    res.status(400)
    throw new Error("Please add text field")
  }
  const goal = await Goal.create({
    text:req.body.text,
    user: req.user.id,
  }) 

  res.status(200).json(goal)
})


//@desc Update  goal
//@route PUT /api/goals/:id
//@ccess Private
const updateGoal = asyncHandler(async (req, res) => {  //create a function called updateGoals
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(404)
    throw new Error("Goal not found")
  }

  

  //Check for user
  if (!req.user) {
    res.status(401)
    throw new Error("User not found")
  }
  //make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal)
})

//@desc DELETE  goals
//@route DELETE /api/goals/:id
//@ccess Private
const deleteGoal = asyncHandler(async (req, res) => { 
  const goal = await Goal.findById(req.params.id)
  if (!goal){
    res.status(404)
    throw new Error("Goal not found")
  }

  
 
  //Check for user
  if (!req.user) {
    res.status(401)
    throw new Error("User not found")
  }
  //make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }
  await goal.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports={
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
} 
