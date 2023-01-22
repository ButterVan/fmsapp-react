const express = require('express')
const router = express.Router()
const { getAnimal, createAnimal, updateAnimal, deleteAnimal } = require("../controllers/animalController")
const { protect } = require('../middleware/authMiddleware')

router.route("/").get(protect, getAnimal).post(protect, createAnimal)
router.route("/:id").put(protect, updateAnimal).delete(protect, deleteAnimal)


module.exports = router