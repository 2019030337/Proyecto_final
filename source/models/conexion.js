const mysql = require("mysql");
const { promisify } = require('util');

var sqlConnecion = mysql.createConnection({
    host:"upsin.c7fqtkszcipl.us-west-2.rds.amazonaws.com",
    user:"admin",
        password:"sQk2tTPiDW8yxoicVb8U",
    database:"sys" 
});

sqlConnecion.connect(function(err){
    if(err){
        console.log(err.message);
    }
    else{
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
