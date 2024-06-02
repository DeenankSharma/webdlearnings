import express from "express";
import axios from "axios";

const app = express();
const port = 3000;



const yourUsername = "hello1705";
const yourPassword = "hello";
const yourAPIKey = "39a6ec93-5a0a-4d2e-9c28-03f509d36c82";
const yourBearerToken = "f8c91c32-4218-4297-9c3e-dfd22d61c30b";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  const response = await axios.get("https://secrets-api.appbrewery.com/random")
  const content = response.data
  console.log(JSON.stringify(content));
  res.render("index.ejs", { content: JSON.stringify(content) })
});

app.get("/basicAuth", async (req, res) => {
  const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  });
  const content = response.data;
  res.render("index.ejs", { content: JSON.stringify(content) })

});

app.get("/apiKey", async (req, res) => {
  const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`)
  const content = response.data;
  res.render("index.ejs", { content: JSON.stringify(content) })
});

app.get("/bearerToken", async (req, res) => {
  const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    },
  });
  const content = response.data;
  res.render("index.ejs", { content: JSON.stringify(content) })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
