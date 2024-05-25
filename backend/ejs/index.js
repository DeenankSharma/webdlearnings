// import { name } from 'ejs';
import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    const d = new Date();
    console.log(d.getDay());
    if(d.getDay()===6){
        res.render("index.ejs",{name:"a Weekend! Time to relax!"})
    }
    else if(d.getDay()===0){
        res.render("index.ejs",{name:"a Weekend! Time to relax!"})
    }
    else{
        res.render("index.ejs",{name:"the Weekday! Time to work hard!"})
    }
})

app.listen(3000,(req,res)=>{
    console.log("Listening on port 3000!")
});
