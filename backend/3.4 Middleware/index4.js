import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

var bandName="";
const app = express();
const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url));

function detailsnikaal(req,res,next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bodyParser.urlencoded({extended:true}));
app.use(detailsnikaal);

app.get("/",(req,res)=>{
  res.sendFile(_dirname + "/public/index.html");
})


app.post("/submit",(req,res)=>{
  console.log(req.body);
  const street = req.body["street"];
  const pet = req.body["pet"];
  res.send("Your band name is : " + street + pet);

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
