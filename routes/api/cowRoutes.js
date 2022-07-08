const router = require('express').Router();
const cowController = require('../../controllers/cowController');

// URL PATH /api/cow/

// Create New User, Set Session loggedIn: true
router.route('/')
    .get(cowController.findAll)
    .post(cowController.create)

router.route('/:id')
    .get(cowController.findById)
    .put(cowController.update)
    .delete(cowController.remove);

module.exports = router;