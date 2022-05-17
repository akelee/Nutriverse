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
  console.log("Connected to database on port" + PORT);
});

app.get("/users", function getUsers(req, res) {
  connection.query("SELECT * FROM `nutriverse.users`", (err, results) => {
    console.log("getUsers was called");
    console.log(err);
    console.log(results);
    res.status(200).json(results);
  });
});

app.post("/signup", function signUp(req, res) {
  console.log("/signup function signUp");
  connection.query(
    "INSERT INTO users u (u.username, u.email, u.users_password, u.users_password) VALUES",
    (err, results) => {
      if (err) throw err;
      console.log(req.body);
      const body = req.body;
      names.push(body.name);
      res.status(200).json({ body });
      // res.json(results);
      res.send("signUp successful");
    }
  );
});

app.get("/user/:name", function sayHello(req, res) {
  res.send("Hello, " + req.params.name + "!");
});

const log = console.log(`Server started on port ${PORT}`);
app.listen(PORT, log);

module.exports = app;
