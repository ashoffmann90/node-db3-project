-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select c.categoryname, p.productname
from category as c
join product as p
on c.id = p.categoryid
;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select o.id, sh.companyname from [order] as o
join shipper as sh 
on sh.Id = o.shipvia
where o.OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select p.productname, od.quantity 
from product as p
join orderdetail as od
on p.id = od.productId
where od.orderid = 10251
order by p.productname

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select o.id, cus.companyname, emp.lastname 
from [order] as o
join customer as cus
on o.customerid = cus.id
join employee as emp
on o.employeeid = emp.id
;