import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("hf");
});

app.get("/about",(req,res)=>{
    res.send("about me");
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})