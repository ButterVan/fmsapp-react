const asyncHandler = require('express-async-handler')

// @desc Get animal
// @route GET /api/animal
// @access Private
const getAnimal = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "get animal" });
})

// @desc create animal
// @route POST /api/animal
// @access Private
const createAnimal = asyncHandler( async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please send with text");
  }
  console.log(req.body.text);
  res.status(200).json({ message: "Create animal" });
})

// @desc update animal
// @route PUT /api/animal/:id
// @access Private
const updateAnimal = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `update animal ${req.params.id}` });
})

// @desc delete animal
// @route DELETE /api/animal/:id
// @access Private
const deleteAnimal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete animal ${req.params.id}` });
})

module.exports = {
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
