const express = require('express')
const router = express.Router()
const { getAnimal, createAnimal, updateAnimal, deleteAnimal } = require("../controllers/animalController")

router.route("/").get(getAnimal).post(createAnimal)
router.route("/:id").put(updateAnimal).delete(deleteAnimal)


module.exports = router