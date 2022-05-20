import cors from "cors";
import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 8080;

console.log(`Server started on port ${PORT}`);

const connection = mysql.createConnection({
  host: "localhost",
  database: "nutriverse",
  user: "nutriverse-admin",
  password: "admin",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connection.connect(() => {
  console.log("Connected to database on port", PORT);
});

app.get("/users", function getUsers(req, res) {
  console.log("req.body", req.body);
  console.log("getUsers function was called");
  connection.query("SELECT * FROM `users`", (err, results) => {
    console.log("Results:", results);
    if (err) throw err;
    res.status(200).json(results);
  });
});

app.get("/signin", function signIn(req, res) {
  const username = req.body.username;
  const users_password = req.body.password;
  const email = req.body.username; // do not change this
  if (username && password) {
    try {
      console.log("req.body", req.body);
      console.log("signIn function was called");

      connection.query(
        "SELECT username, email FROM `users` \
        WHERE username = ? OR email = ? AND password = ?",
        [username, username, users_password],
        (err, results) => {
          console.log("Results:\n", results);
          if (err) {
            res.status(400).json(err);
            // response.end();
          }
          /*
          if (results.length > 0) {
            // request.session.loggedin = true;
            // request.session.username = username;
            response.redirect("/account");
          } else {
            response.send("Please enter Username and Password!");
            // response.send("Incorrect Username and/or Password!");
          }
          // response.end();
          */
        }
      );
      res.status(200).send("signIn successful");
    } catch (error) {
      console.log(error);
      res.status(400).json(err);
      // response.send(error);
    }
  }
});

app.post("/signup", function signUp(req, res) {
  try {
    console.log(req.body);
    console.log("/signUp function was called");
    const username = req.body.username;
    const email = req.body.email;
    const user_password = req.body.password;
    // const password_confrimation = req.body.password2;

    connection.query(
      "INSERT INTO `users` (username, email, users_password) \
      VALUES(?, ?, ?)",
      // [req.body.username, req.body.email, req.body.password, req.body.password2],
      [username, email, user_password],
      (err, results) => {
        console.log("Results:\n", results);
        if (err) {
          res.status(400).json(err);
        }
      }
    );
    res.status(200).send("signUp successful");
  } catch (error) {
    console.log(error);
    res.status(400).json(err);
  }
});

app.get("/user/:name", function sayHello(req, res) {
  res.send("Hello, " + req.params.name + "!");
});

const log = console.log(`Server started on port ${PORT}`);
app.listen(PORT, log);
