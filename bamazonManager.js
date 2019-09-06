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
