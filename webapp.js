//Express
	var express = require('express')
	var app = express();
	app.use(express.static('static'));
	var server = app.listen(3000, function() {
		var port = server.address().port;
		console.log("Started server at port", port);
	});
	var bodyParser = require('body-parser')
	app.use(bodyParser.urlencoded({ extended: false }))

// Login endpoint
app.post('/send', function (req, res) {
  	if (!req.body.username || !req.body.password) 
  	{
    	res.sendStatus(401);
  	} 
  	else if(req.body.username === "papia" && req.body.password === "admin") 
  	{
	 	res.send("success");
  	}
  	else
  	{
  		res.send("failed");
  	}
});
 
//Mongo
	var MongoClient = require('mongodb').MongoClient, format = require('util').format;
	var url = 'mongodb://127.0.0.1:27017/test';

app.post('/add',function(req, res)

	{  MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
			    if (err) 
			        throw err;
			    else 
			        console.log("successfully connected to the database");

	    		var cursor = db.collection('register').find();
	            cursor.each(function(err, item) {

	                if (item != null) {
	                    res.send({status: 'OK'});
	                }
	            });

	            db.close();
			}); //MongoClient
	});//app.get

