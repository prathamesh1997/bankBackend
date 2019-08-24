const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const ExecuteQuery = require('./module/executeQuery');

const app = express();

//CONSTANT QUERY's
const SELECT_ALL_USERS = 'SELECT * FROM users';

//MIDDLEWARE TO HANDLE REQUEST'S
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

//API'S 
// ***********************
//Get all user details
app.get('/api/users',(req,res)=>{
    ExecuteQuery(res,SELECT_ALL_USERS);
})

//get user details by id

app.get('/api/customer/:id',(req,res)=>{
    ExecuteQuery(res,`SELECT * FROM users where id=${req.params.id}`);
})

//verify details

app.post('/api/verifyUser',(req,res)=>{
    var id = req.body.id;
    var verified ='verified';
    ExecuteQuery(res,"update users set status = 'verified' where id = '"+id+"'");
})

app.get('/userDetails',(req,res)=>{
    res.send('User Deails');
})


app.listen(8080,()=>{
    console.log(`app listening on port 8080`)
})