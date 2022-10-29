// @desc Get animal
// @route GET /api/animal
// @access Private
const getAnimal = (req, res) => { 
  console.log(req.body)
  res.status(200).json({message: "get animal"})
}

// @desc create animal
// @route POST /api/animal
// @access Private
const createAnimal = (req, res) => {
  if (!req.body.text) { 
    res.status(400).json({ message: "Please send with text" })
  }
  console.log(req.body.text)
  res.status(200).json({message: "Create animal"})
}

// @desc update animal
// @route PUT /api/animal/:id
// @access Private
const updateAnimal = (req, res) => { 
  res.status(200).json({message: `update animal ${req.params.id}`})
}

// @desc delete animal
// @route DELETE /api/animal/:id
// @access Private
const deleteAnimal = (req, res) => { 
  res.status(200).json({message: `delete animal ${req.params.id}`})
}

module.exports = {
  getAnimal, createAnimal, updateAnimal, deleteAnimal
}