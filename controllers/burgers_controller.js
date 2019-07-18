const express=require("express");
const app = express();
var burger = require("../models/burger");

module.exports = function(app, path){
    app.get("/", function(req,res){
        burger.all(function(burgers){
            res.render('burgers', {burgers});
        });
        console.log("fetching all burgers");
    });

    app.post("/newBurger/", function(req,res){
        var newBurger = req.body.newBurger;
        burger.insert(newBurger, function(){
        });
        console.log("adding new burger: " +newBurger);
        res.redirect("/");
    });

    app.post("/eatBurger/:burgerId", function(req,res){
        var eatBurger = req.params.burgerId;
        burger.update(eatBurger, function(){
        });
        console.log("eating burger w id: "+eatBurger);
        res.redirect("/");
    });
}