SELECT TOP(20)
    SalesLT.Product.ProductID,
    SalesLT.Product.Name,
    SalesLT.Product.Color,
    SalesLT.ProductModel.ProductModelID,
    SalesLT.ProductModel.Name,
    SalesLT.SalesOrderDetail.OrderQty,
    SalesLT.SalesOrderDetail.UnitPrice,
    SalesLT.SalesOrderDetail.LineTotal
    FROM SalesLT.Product
    JOIN SalesLT.ProductModel  
    ON SalesLT.Product.ProductModelID = SalesLT.ProductModel.ProductModelID
    JOIN SalesLT.SalesOrderDetail
    ON SalesLT.Product.ProductID = SalesLT.SalesOrderDetail.ProductID;