// import { dir } from "console";
// import exp from "constants";
import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.get("/",(req,res)=>{
  console.log(_dirname + "/public/index.html");
  res.sendFile(_dirname + "/public/index.html");
})

app.use(bodyParser.urlencoded({extended:true}));
app.post("/submit",(req,res)=>{
  console.log(req.body);
})

app.listen(3000,()=>{
  console.log('listening on port 3000');
})