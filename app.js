import express from "express";
import mysql from "mysql";

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

const connection = mysql.createConnection({
  host: "localhost",
  database: "nutriverse-db",
  user: "nutriverse-admin",
  password: "my-secret-password",
});

app.get("/", function sayHello(req, res) {
  res.send("Hello, world!");
});

app.get("/express", function expressHello(req, res) {
  res.send("Hello, Express!");
});

app.get("/user/:name", function sayHello(req, res) {
  res.send("Hello, " + req.params.name + "!");
});
