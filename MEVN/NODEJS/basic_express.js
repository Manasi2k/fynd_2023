const express=require("express");//not used simmilar to other module

const app=express();//it is function 
//express can be called number of time we want

app.get("/",(req,res)=> {
    res.send("route at root");
});

app.get("/hello",(req,res)=>{
    res.send("route at hello")
});

app.listen(3000,()=> {
    console.log("Listening on 3000");
});