// Import the ORM 
var orm = require("../config/orm.js");


//-----------------Call the ORM--------------------------//
	var burger = {
		all: function(callback){
			orm.selectAll("burgers",function(response){
				callback(response);
			});
		},
		create:function(valueOrName, callback){
			orm.insertOne("burgers",valueOrName,function(response){
				callback(response);
			});
		},
		update: function(valueOrName,keyNvalue,condition, callback){
			orm.updateOne("burgers",keyNvalue, condition,function(response){
				callback(response);
			});
	};
//_____________________________________________________//


// Export burger
module.exports = burger;