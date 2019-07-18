const express=require("express");
const app = express();
var burger = require("../models/burger");

module.exports = function(app, path){
    app.get("/", function(req,res){
        burger.all(function(burgers){
            console.log(burgers);
            res.render('burgers', {burgers});
        });
        console.log("fetching all burgers");
    });

    app.post("/newBurger/", function(req,res){
        var newBurger = req.body.newBurger;
        console.log("adding new burger: " +req.body.newBurger);
        burger.insert(newBurger, function(){
            console.log("adding new burger: " +req.body.newBurger);
        });
        res.redirect("/");
    });

    app.post("/eatBurger/:burgId", function(req,res){
        console.log("eating burger w id: "+req.params.burgId);
        //return res.json(friendData.friends);
    });
}