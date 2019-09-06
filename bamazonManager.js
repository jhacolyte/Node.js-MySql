var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayMenu();
});

function displayMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Menu",
        message: "Choose you option from the below menu???",
        choices: [
          "a: View Products for Sale",
          "b: View Low Inventory",
          "c: Add to Inventory",
          "d: Add New Product",
          "e: Exit"
        ]
      }
    ])
    .then(function(choice) {
      switch (choice.Menu) {
        case "a: View Products for Sale":
          viewProductsForSale();
          break;
        case "b: View Low Inventory":
          viewLowInventory();
          break;
        case "c: Add to Inventory":
          addToInventory();
          break;
        case "d: Add New Product":
          addNewProduct();
          break;
        case "e: Exit":
          process.exit();
          break;
      }
    });
}

function viewProductsForSale() {
  console.log("viewProductsForSale");
  var sql =
    "select item_id,product_name, price, stock_quantity from products where stock_quantity>0";
  connection.query(sql, function(err, res) {
    if (err) throw err;
    console.log("Items available for Sale");
    console.log("Id \t Name \t Price \t Quantity\n");
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].item_id +
          "\t" +
          res[i].product_name +
          "\t" +
          res[i].price +
          "\t" +
          res[i].stock_quantity +
          "\n"
      );
    }
    displayMenu();
  });
}
