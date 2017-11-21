var express  = require("express");
var router = express.Router();

var burgers = require("../models/burgers.js");

//----------------Router------------------------//
	router.get("/", function(request,response){
		burgers.all(function(data){
			var fullBurgersObj = {
				allBurgers : data
			};
			console.log(fullBurgersObj);
			response.render("index",fullBurgersObj);
		});
	});

	router.post("api/addburger", function(request,response){
		burgers.create(
			["burger_name"],
			[request.body.burger_name],
			function(result){
				response.json({id:result.insertId})
			});
	});
//_____________________________________________

module.export = router;