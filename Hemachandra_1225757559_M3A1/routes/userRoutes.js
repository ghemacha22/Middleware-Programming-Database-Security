const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router
.route('/')
.get(userController.getAllUsers)
.post(userController.createNewUsers);
router
.route('/:id')
.get(userController.getUsersByID)
.patch(userController.patchUsersById)
.delete(userController.deleteUsersByID);
module.exports = router;