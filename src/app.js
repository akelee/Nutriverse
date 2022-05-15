import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  database: "nutriverse",
  user: "nutriverse-admin",
  password: "admin",
});

app.use(express.json());
app.use(cors());

connection.connect(() => {
  console.log("Connected to database");
});

app.get("/users", function(req, res) {
  connection.query("SELECT * FROM `users`", (error, results) => {
    console.log("getUsers was called");
    console.log(error);
    console.log(results);
    res.status(200).json(results);
  });
});

app.post("/signup", function(req, res) {
  console.log(req.body);
  res.send("yay");
});

app.get("/express", function expressHello(req, res) {
  res.send("Hello, Express!");
});

app.get("/user/:name", function sayHello(req, res) {
  res.send("Hello, " + req.params.name + "!");
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
