const sql = require('mssql');

const DATABASE_CONFIG = require('../config');

var ExecuteQuery =  function(response,query){
    sql.connect(DATABASE_CONFIG,function(err){
        if(err){
            console.log(`Error while connecting database ${err}`)
        }else{
            //Create Request Object
            var request = new sql.Request();

            //query to database

            request.query(query,function(err,res){
                if(err){
                    console.log(`Error while querying database ${err}`)
                }else{
                    response.send(res)
                }
            })
        }
    })
}
module.exports = ExecuteQuery;