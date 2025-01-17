const express=require('express');
const pasth=require('path');
const bcrypt=require("bcryptjs")
const collection=require('./config.js');
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended: false}));

app.set('view engine','ejs');

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register", async (req,res)=>{
    const data = {
        name: req.body.username,
        password: req.body.password
    }
    const userdata=await collection.insertMany(data);
    console.log(userdata);
});



app.post("/signup", async (req,res)=>{
    const data={
        name: req.body.username,
        password: req.body.password
    }

    const existingUser=await collection.findOne({name: data.name});

    if(existingUser){
        res.send("User already exists. Please choose a different username.");
    }
    else{
        const saltRounds=10;
        const hashedPassword=await bcrypt.hash(data.password,saltRounds);

        data.password=hashedPassword;

        const userdata=await collection.insertMany(data);
        console.log(userdata);
        res.render("login.ejs");
    }
});

app.post("/login",async(req,res)=>{
    try{
        const check=await collection.findOne({name: req.body.username});
        if(!check){
            res.send("username not found");
        }
        const isPasswordMatch=await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch){
            res.render("home.ejs");
        }
        else{
            req.send("wrong password");
        }
    }
    catch{
        res.send("Wrong Details");
    }
});

const port = 2400;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});