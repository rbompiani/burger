const express = require('express');
const app = express();

const path = require('path');

var exphbs = require("express-handlebars");
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const routes = require("./controllers/burgers_controller");

const connection = require('./config/connection');

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.urlencoded({ extended: true }));

routes(app,path);