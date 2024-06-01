import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  try{
    console.log(req.body);
  var type = req.body["type"];
  var participants = req.body["participants"];
  const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`)
  var l = response.data.length;
  var n = Math.floor(Math.random()*l);
  const result = response.data[n];
  console.log(result);
  res.render("index.ejs", result);
  }
  catch(error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: "Nothing matched your criterion!",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
