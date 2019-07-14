const express=require("express");
const app = express();
var burger = require("../models/burger");

//const burger=require("../models/burger");
module.exports = function(app, path){
    app.get("/", function(req,res){
        burger.all(function(burgers){
            console.log(burgers);
            res.render('burgers', {burgers});
        })
        console.log("fetching all burgers");
        //return res.json(friendData.friends);
    });

    app.post("/api/newBurger/:burgName", function(req,res){
        console.log("adding new burger: " +req.params.burgName)
        //return res.json(friendData.friends);
    });

    app.post("/api/eatBurger/:burgId", function(req,res){
        console.log("eating burger w id: "+req.params.burgId);
        //return res.json(friendData.friends);
    });
}