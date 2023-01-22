const asyncHandler = require('express-async-handler')
const Animal = require('../models/animalModel')
const User = require('../models/userModel')

// @desc Get animal
// @route GET /api/animal
// @access Private
const getAnimal = asyncHandler(async (req, res) => {
  // console.log(req.body);
  // res.status(200).json({ message: "get animal" });
  const animal = await Animal.find({ user: req.user.id })

  res.status(200).json(animal);

})

// @desc create animal
// @route POST /api/animal
// @access Private
const createAnimal = asyncHandler( async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please send with text");
  }
  // console.log(req.body.text);
  // res.status(200).json({ message: "Create animal" });
  const animal = await Animal.create(
    {
      text: req.body.text,
      user: req.user.id,
    }
  )
  res.status(200).json(animal);
})

// @desc update animal
// @route PUT /api/animal/:id
// @access Private
const updateAnimal = asyncHandler(async (req, res) => {
  const animal = await Animal.findById(req.params.id)
  // res.status(200).json({ message: `update animal ${req.params.id}` });

  if (!animal) { 
    res.status(400)
    throw new Error('Animal not found')
  }

  const user = await User.findById(req.user.id)

  //check for user
  if (!user) { 
    res.status(401)
    throw new Error('User not found')
  }

  //Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) { 
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, {new: true,})

  res.status(200).json(updatedAnimal);
})

// @desc delete animal
// @route DELETE /api/animal/:id
// @access Private
const deleteAnimal = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: `delete animal ${req.params.id}` });
  const animal = await Animal.findById(req.params.id)
  if (!animal) { 
    res.status(400)
    throw new Error('Animal not found')
  }

  const user = await User.findById(req.user.id)

  //check for user
  if (!user) { 
    res.status(401)
    throw new Error('User not found')
  }

  //Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) { 
    res.status(401)
    throw new Error('User not authorized')
  }

  await animal.remove()

  res.status(200).json({id: req.params.id});

})

module.exports = {
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
