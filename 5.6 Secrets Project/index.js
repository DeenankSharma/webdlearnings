import express from "express";
import axios from 'axios';
import bodyParser from 'body-parser'

const app = express()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",async (req,res)=>{
    const response = await axios.get("https://secrets-api.appbrewery.com/random")
    const content = response.data;
    res.render("index.ejs",content);
})


app.listen(3000, ()=>{
    console.log("Listening on port 3000!")
})

