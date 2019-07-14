const connection = require('./config/connection');

function selectAll(){
    connection.query('SELECT * FROM burgers', function (error, results) {
        if (error) throw error;
        console.log('rows: ', results);
    });
}

function insertOne(newBurg){
    connection.query('INSERT INTO burgers (burger_name) VALUES("'+newBurg+'")', function (error, results) {
        if (error) throw error;
        console.log('new burger added: ', results);
    });    
}

function updateOne(burgID){
    connection.query('UPDATE burgers SET (devoured = TRUE) WHERE id ='+burgID+'', function (error, results) {
        if (error) throw error;
        console.log('burger updated: ', results);
    });    
}

module.exports = {
    selectAll = selectAll,
    insertOne = insertOne,
    updateOne = updateOne
}

