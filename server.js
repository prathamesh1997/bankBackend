const express = require('express');
const cors = require('cors');
const ExecuteQuery = require('./module/executeQuery');

const app = express();

//CONSTANT QUERY's
const SELECT_ALL_USERS = 'SELECT * FROM users';

//MIDDLEWARE TO HANDLE REQUEST'S
app.use(cors());

//API'S 

app.get('/api/users',(req,res)=>{
    ExecuteQuery(res,SELECT_ALL_USERS);
})

app.get('/userDetails',(req,res)=>{
    res.send('User Deails');
})


app.listen(8080,()=>{
    console.log(`app listening on port 8080`)
})