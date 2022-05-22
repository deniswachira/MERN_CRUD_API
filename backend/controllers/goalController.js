const asyncHandler = require('express-async-handler');

//@desc Get goal
//@route GET /api/v1/goals
//@access Public
const getGoals = asyncHandler ( async(req, res) => {
    res.status(200).json({message: 'Get goals'});

})

//@desc Set goal
//@route post /api/v1/goals
//@access Private
const setGoal = asyncHandler ( async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Text is required');
    } 

    res.status(200).json({message: 'Set goals'});

})

//@desc Upate goal
//@route PUT /api/v1/goals/:id
//@access Private
const updateGoal = asyncHandler ( async(req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`});

})

//@desc Delete goal
//@route DELETE/api/v1/goals/:id
//@access Public
const deleteGoal = asyncHandler ( async(req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`});

})


module.exports ={
    getGoals, setGoal, updateGoal, deleteGoal
}