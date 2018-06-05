//___________________Dependencies________________________
	var express = require("express");
	var methodOverride = require("method-override");
	var bodyParser = require("body-parser");
//_______________________________________________________


//-----------------Set Up Express App -------------------
	var app = express();
	var PORT = process.env.PORT || 3000;

	//App should handle parsing --> use body-parser
	app.use(bodyParser.json({type:"application/vnd.api+json"}));
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.text());

	//static html to use
	app.use(express.static("public"));
//-------------------------------------------------------


//____________________Start Server_______________________

	app.listen(PORT,function(){
		console.log("EatDaBurger is listening on PORT : " + PORT);
	})
//_______________________________________________________




