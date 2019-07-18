const orm = require("../config/orm");

var burger = {
    all : function(cb){
        orm.selectAll(function(res){
            cb(res);
        })
    },
    insert : function (newBurg, cb){
        orm.insertOne(newBurg, function(res){
            cb(res);
        })
    },
    update : function (burgId, cb){
        orm.updateOne(burgId, function(res){
            cb(res);
        })
    }
}

module.exports = burger;