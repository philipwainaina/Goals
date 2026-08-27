//@desc Get all goals
//@route GET /api/goals
//@ccess Private  
const getGoal = (req, res) => {
  res.status(200).json({ message: "Get  goal" })
}

//@desc Set  goals
//@route POST /api/goals/
//@ccess Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "Set  goal" })
}

//@desc Update  goals
//@route PUT /api/goals/:id
//@ccess Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update  goal,${req.params.id}`})
}

//@desc DELETE  goals
//@route DELETE /api/goals/:id
//@ccess Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete  goal,${req.params.id}`})
}




module.exports={
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
} 