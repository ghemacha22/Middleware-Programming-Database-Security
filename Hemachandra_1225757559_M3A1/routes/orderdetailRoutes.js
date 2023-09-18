const express = require('express');
const router = express.Router();
const orderdetailController = require('../controllers/orderdetailController');
router
.route('/')
.get(orderdetailController.getAllOrderDetail)
.post(orderdetailController.createNewOrderDetail);
router
.route('/:id')
.get(orderdetailController.getOrderDetailByID)
.patch(orderdetailController.patchOrderDetailById)
.delete(orderdetailController.deleteOrderDetailByID);
module.exports = router;