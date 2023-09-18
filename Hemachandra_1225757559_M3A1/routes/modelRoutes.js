const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController');
router
.route('/')
.get(modelController.getAllModel)
.post(modelController.createNewModel);
router
.route('/:id')
.get(modelController.getModelByID)
.patch(modelController.patchModelById)
.delete(modelController.deleteModelByID);
module.exports = router;