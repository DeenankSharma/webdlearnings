//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

var isvalid=false;
const app = express();
const port = 3000;

const _dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));

function passwordCheck(req,res,next){
    if(req.body["password"] === "satoshi"){
        isvalid = true;
    }
    next();
}

app.use(passwordCheck);

app.get("/",(req,res)=>{
    res.sendFile(_dirname + "/public/index.html");
})



app.post("/check",(req,res)=>{
    if(isvalid){
        res.sendFile(_dirname + "/public/secret.html");
    }
    else{
        res.sendFile(_dirname + "/public/index.html");
    }
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})