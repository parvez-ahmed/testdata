var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var getData = require("./getData.js");
//setup configuration

app.use(express.static("../dist/myapp"));


//setup path

app.get('/',(req,res)=>{
    res.send("index.html");
});

app.get("/getAllData", async (req,res)=>{

    // this will contain topic , sector ,region and pestle
     let data = await getData.getAllData();
     // this will contain intense relevence and likelihood data
     let result = await getData.cal()
     data.measureData = result;
     console.log(data);
    res.send(data);
     
})

//making the server to listen on port number 8000

var server = app.listen(4200,()=>{
    console.log("server is running");
})