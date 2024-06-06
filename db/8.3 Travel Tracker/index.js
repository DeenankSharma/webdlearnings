import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"new_password",
  port:5432
})
db.connect();

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_country");
    console.log(result.rows)
    const countries = []
    for (let i = 0; i < result.rows.length; i++) {
      const element = result.rows[i];
      countries.push(element.country_code)
    }

    console.log({countries:countries, total: countries.length});

    res.render("index.ejs", {countries:countries, total: countries.length});
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
});


app.post("/add",async (req,res)=>{
  var country = req.body.country
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [country]
  );
  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;

    await db.query("INSERT INTO visited_country (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  } 
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
