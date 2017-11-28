// -----------Require/Import Your connection ---------

	var connection = require("../config/connection.js");
//------------------------------------------------------

   
// ------   Object for all our SQL functions -----------
//
	var orm = {
	  selectAll: function(table, callback) {
	    var queryString = "SELECT * FROM " + table + ";";
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }
	      callback(result);
	    });
	  },
	  insertOne: function(table, newBurgerName, callback) {
	    var queryString = "INSERT INTO " + table + " (burger_name) VALUES (" + newBurgerName +")";

	    console.log(queryString);

	    connection.query(queryString, newBurgerName, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      callback(result);
	    });
	  },

	  // An example of objColVals would be {devoured: true}
	  // condition "burger name == xyz"
	  updateOne: function(table, objColVals, condition, callback) {
	    var queryString = "UPDATE " + table;

	    queryString += " SET " + objToSql(objColVals) + " WHERE" + condition;

	    console.log(queryString);

	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      callback(result);
	    });
	  }
	};
//------------------------------------------------------	



// ------Export the object for the model (burger.js)-----

	module.exports = orm;
//-------------------------------------------------------