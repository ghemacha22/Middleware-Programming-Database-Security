const db = require('../config/db.manager');
exports.getAllOrderDetail = function (req, res) {
const getOrderDetail = db.getOrderDetail().then(results=>{
console.log(results);
res.status(200).json({
status: 'successfull',
data: results.recordsets[0]
}); // send all the data
});
}
exports.getOrderDetailByID = function( req, res){
const {id} = req.params; // get id
res.status(200).json({
status: 'no implemented'
});
}
exports.createNewOrderDetail = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.patchOrderDetailById = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)const {id} = req.params;// get id (attribute)
res.status(200).json({
status: 'no implemented'
});
}
exports.deleteOrderDetailByID = function( req, res){ // must select the body to be raw->JSON in Postman
const {body} = req;// req.body (attribute)
const {id} = req.params;// get id
res.status(200).json({
status: 'no implemented'
});
}