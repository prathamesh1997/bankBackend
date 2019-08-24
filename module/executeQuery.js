const sql = require('mssql');

const DATABASE_CONFIG = require('../config');



var ExecuteQuery =  function(response,query){
    const pool = new sql.ConnectionPool(DATABASE_CONFIG)
    const connection = pool;
    
    connection.connect()
        .then(()=>{
            
            //create database request
            var request = new sql.Request(connection);
            
            //query to database
            request.query(query,function(err,res){
                if(err){
                    console.log(`Error while querying database ${err}`)
                }else{
                    return response.send(res.recordset)
                }
            })
        })  
        .catch(err=>{
            console.log(err)
        })
    // sql.connect(DATABASE_CONFIG,function(err){
    //     if(err){
    //         console.log(`Error while connecting database ${err}`)
    //     }else{
    //          //Create Request Object
    //           var request = new sql.Request();

    //         //query to database

    //         request.query(query,function(err,res){
    //             if(err){
    //                 console.log(`Error while querying database ${err}`)
    //             }else{
    //                 console.log(res.recordset)
    //                return response.send(res.recordset)
    //             }
    //         })
    //     }
    // })
}
module.exports = ExecuteQuery;