// Import the ORM 
var orm = require("../config/orm.js");


//-----------------Call the ORM--------------------------//
	var burger = {
		all: function(callback){
			orm.all("burgers",function(response){
				callback(response);
			});
		},
		create:function(columns, values, callback){
			orm.create("burgers",columns,values,function(response){
				callback(response);
			});
		}
	};
//_____________________________________________________//


// Export burger
module.exports = burger;