import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './models/user';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev.js';

let app = express();

// connect to mongodb 
mongoose.connect("mongodb://localhost/auth_test");

app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


// user registration route
app.post('/user/register',(req,res) => {
    var credentials = req.body;
    // putting data in MongoDB
    User.create(credentials,function(err,done){
        if (err) {
            console.log("error while saving new user to db "+ err);
        }
        else {
            console.log("new user succesfully entered to db");
            res.send({"status":"success", "description":"User successfully registered"});        
        }
    });
    
});


// user login route
app.post('/user/login',(req,res) => {
    var credentials = req.body;
    
    User.find({username:credentials.username},function(err,data){
        if (err) {
            console.log("error getting user from db for verification"+ err);
        }
        else {
            console.log(data);
            if (data.length > 0) {
                // user is already regisetered
                if (data[0].password === credentials.password) {
                    res.send({"status":"success", "description":"User login successful"});
                }
                else {
                    res.send({"status":"failure", "description":"Wrong credentials, Try Again!!"});
                }
            } else {
                res.send({"status":"failure", "description":"User not registered, Please Signup to register"});    
            }
                
        }
    });
    
});




app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname,'./index.html'));
});


app.listen(3000, ()=> console.log('server is listening on port 3000'));