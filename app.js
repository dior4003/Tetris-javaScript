const express=require("express");
const app=express();
require("dotenv").config();

const PORT =process.env.PORT||8080;

app.use(express.urlencoded({extends:true}));
app.use(express.static("public"));

app.get("/" ,(req, res)=>{
    res.sendFile()
})

