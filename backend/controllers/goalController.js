//@desc Get all goals
//@route GET /api/goals
//@ccess Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get  goals" })
}

//@desc Set  goals
//@route POST /api/goals/
//@ccess Private
const setGoals = (req, res) => {
  res.status(200).json({ message: "Set  goals" })
}

//@desc Update  goals
//@route PUT /api/goals/:id
//@ccess Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update  goals,${req.params.id}`})
}

//@desc DELETE  goals
//@route DELETE /api/goals/:id
//@ccess Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete  goals,${req.params.id}`})
}




module.exports={
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
} 