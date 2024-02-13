
const express = require('express');

const app = express();

app.get("/", function(req, res){

	res.send("Welcome to our home page");
})


app.listen(3000. function(){
	console.log("Server has started running at port 3000");
})
