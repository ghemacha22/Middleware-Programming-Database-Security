const sql = require('mssql');
const dbConnection = require('./db.config');
console.log(dbConnection);
async function getSalesProducts(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP(20)
    productId,
    name,
    productNumber,
    color
    listPrice
    FROM
    salesLT.Product
    `);
    console.log(`Returned SQL results`);
    return results;
}
async function getUsers(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP(20)
    CustomerID,
    FirstName,
    LastName, 
    CompanyName,
    EmailAddress,
    Phone
    FROM
    SalesLT.Customer;
    `);
    console.log(`Returned SQL results`);
    return results;
}
async function getModel(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP(20)
    ProductModelID,
    Name,
    rowguid,
    ModifiedDate
    FROM
    salesLT.ProductModel;
    `);
    console.log(`Returned SQL results`);
    return results;
}
async function getAddress(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP(20)
    AddressID,
    AddressLine1,
    City,
    StateProvince,
    CountryRegion,
    PostalCode
    FROM
    SalesLT.Address;
    `);
    console.log(`Returned SQL results`);
    return results;
}
async function getOrderDetail(){
    console.log(' Connecting to SQL....... Cloud Server');
    let dbContext = await sql.connect(dbConnection);
    console.log('The Databse connection was Successful');
    console.log('Getting data');
    let results = await dbContext.request()
    .query(`
    SELECT TOP(20)
    ProductID,
    SalesOrderID,
    SalesOrderDetailID,
    OrderQty,
    UnitPrice,
    LineTotal
    FROM
    SalesLT.SalesOrderDetail
    `);
    console.log(`Returned SQL results`);
    return results;
}
//Export
module.exports = {getSalesProducts :getSalesProducts, getUsers, getModel, getAddress, getOrderDetail};