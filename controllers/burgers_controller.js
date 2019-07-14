const express=require("express");
const app = express();

//const burger=require("../models/burger");
module.exports = function(app, path){
    app.get("/api/allBurgers", function(req,res){
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