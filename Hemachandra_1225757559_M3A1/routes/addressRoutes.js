const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
router
.route('/')
.get(addressController.getAllAddress)
.post(addressController.createNewAddress);
router
.route('/:id')
.get(addressController.getAddressByID)
.patch(addressController.patchAddressById)
.delete(addressController.deleteAddressByID);
module.exports = router;