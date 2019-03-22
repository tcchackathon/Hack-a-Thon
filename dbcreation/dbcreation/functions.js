var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("thecaryouwant");
  dbo.collection("cars").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
}); 

//returns high fuel econ
function singlePerson()
{
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		
		var query = { fuel_city: {$gt: 20}};
		
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 
}

//returns 4+doors suv
function family()
{
		var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
	var query = { $and [{doors: 4}, {body_type: "SUV"}]};
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 


//returns twodoors and coupes
function sporty()
{
		var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		
		var query = { body_type: "COUPE"};
		
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 
}


//returns 4wd sporty and trucks
function adventure
{
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		
		var query = { $and[{drive_train: "4WD"}, $or [{body_type: "SUV"}, {body_type: "PICKUP"}]]}};
		
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 	
}


//returns luxory cars
function elderly()
{
		var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		
		var query = { $and[{body_type: "SEDAN"}, {luxury: true}]};
		
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 
}

//returns cars that the ada is marked as true
function ada()
{
		var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		
		var query = { ada: true};
		
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 
}


//returns cars that are leather interior and 4 door. 
function pets()
{
		var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		
		var query = { $and[{interior: "LEATHER"}, {doors: 4}]};
		
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 
}


//returns if the eco friendly is true. 
function ecofriendly()
{
		var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";
	
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		
		var query = { eco: true};
		
		var dbo = db.db("thecaryouwant");
			dbo.collection("cars").find({}).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			db.close();
  });
}); 
}
