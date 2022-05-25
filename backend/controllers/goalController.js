const asyncHandler = require('express-async-handler');
const Goal = require('../model/goalModel');
const User = require('../model/userModel');

//@desc Get goal 
//@route GET /api/goals
//@access Public
const getGoals = asyncHandler ( async(req, res) => {
    const goals = await Goal.find({user: req.user.id});
    res.status(200).json(goals);
 
})

//@desc Set goal
//@route post /api/goals
//@access Private
const setGoal = asyncHandler ( async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Text is required');
    } 
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    });

    res.status(200).json(goal);

})

//@desc Upate goal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler ( async(req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    //Check user
  
    if(!req.user){
        res.status(401)
        throw new Error('User not found');
    }
//Make sure the logged in user matches the user of the goal
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal);

})

//@desc Delete goal
//@route DELETE/api/goals/:id
//@access Public
const deleteGoal = asyncHandler ( async(req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }

      //Check user
    
      if(!req.user){
          res.status(401)
          throw new Error('User not found');
      }
  //Make sure the logged in user matches the user of the goal
      if(goal.user.toString() !== req.user.id){
          res.status(401)
          throw new Error('User not authorized')
      }
    await goal.remove();
    res.status(200).json({id: req.params.id});

})


module.exports ={
    getGoals, setGoal, updateGoal, deleteGoal
}