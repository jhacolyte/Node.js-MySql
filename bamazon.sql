CREATE DATABASE bamazon;
USE bamazon;

drop table products;

create table products
(
    item_id integer(10) not null
    auto_increment,
product_name varchar
    (100),
department_name varchar
    (50),
price decimal
    (20,2),
stock_quantity integer
    (20),
primary key
    (item_id)
);

    insert into products
        (item_id, product_name, department_name, price, stock_quantity)
    values
        (01, "pixel4", "electronics", 899.00, 5),
        (02, "Jack Hammer", "Home Improvements", 38.00, 100),
        (03, "handbag", "women", 50.00, 6),
        (04, "Led Light Bulb", "Home improvement", 39.99, 150),
        (05, "echo not", "Electronics", 29.99, 65),
        (06, "Leica M 246", "Electronics", 13, 950, 35),
        (07, "Node.js for Dummies", "Books", 12.79, 500),
        (08, "The Tales of Beedle the Bard", "Books", 3600000, 7),
        (09, "Electric Martini Maker", "appliance", 150, 16),
        (10, "Washing Machine", "appliance", 499.99, 500);