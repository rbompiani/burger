const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, "/assets")));

var exphbs = require("express-handlebars");
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const routes = require("./controllers/burgers_controller");

const connection = require('./config/connection');

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.urlencoded({ extended: true }));

routes(app,path);