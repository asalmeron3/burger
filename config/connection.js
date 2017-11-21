   // * Inside the `connection.js` file, setup the code to connect Node to MySQL.
var mysql = require("mysql");

var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password: "185454",
	database: "burgers_db"
})

connection.connect(function(err){
	if (err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("EatDaBurger connection is up as id "+ connection.threadId);
});

   // * Export the connection.
module.exports = connection;