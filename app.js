import cors from "cors";
import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 8080;

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

app.get("/users", (req, res) => {
  console.log("req.body", req.body);
  try {
    const usersQuery = connection.query(
      "SELECT u.id, u.username, u.display_name FROM `users` u",
      (err, results) => {
        console.log("Results:", results);
        if (err) throw err;
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log("Error:", err);
  }
});

app.get("/users/?", (req, res) => {
  console.log("req.body", req.body);
  try {
    const usersQuery = connection.query(
      "SELECT u.id, u.username, u.display_name FROM `users` u \
      WHERE u.id = ?",
      [req.query.id],
      (err, results) => {
        console.log("Results:", results);
        if (err) throw err;
        res.status(200).json(results);
      }
    );
  } catch (err) {
    console.log("Error:", err);
  }
});

app.get("/user/:name", function sayHello(req, res) {
  res.send("Hello, " + req.params.name + "!");
});

app.post("/signin", function signIn(req, res) {
  const username = req.body.username;
  const users_password = req.body.password.toString();
  const email = req.body.username; // do not change this

  if (username && users_password) {
    try {
      console.log("req.body", req.body);
      console.log("signIn function was called");

      const username = req.body.username;
      const users_password = req.body.password;
      const email = req.body.username; // do not change this

      const signInQuery = connection.query(
        "SELECT `username`, `users_password` FROM `users` \
        WHERE `username` = ? OR `email` = ? AND `users_password` = ?",
        [username, username, users_password],
        (err, results) => {
          console.log(`Err: ${err}\nResults: ${results}`);
          // if (results.length > 0) {
          //   request.session.loggedin = true;
          //   request.session.username = username;
          //   res.redirect("/account");
          // } else {
          //   res.send("Incorrect Username and/or Password!");
          // }
          if (err) {
            res.status(400).json(err);
          }
          // res.send("Please enter Username and Password!");
        }
      );
      console.log(signInQuery.sql);
      res.status(200).send("signIn successful");
    } catch (error) {
      console.log("Error occured:\n", error);
      res.status(400).json(err);
      // res.send(error);
    }
  }
});

app.post("/signup", function signUp(req, res) {
  try {
    console.log("req.body", req.body);
    console.log("/signUp function was called");

    const username = req.body.username;
    const email = req.body.email;
    const user_password = req.body.password;
    // const password_confirmation = req.body.password2;

    const signUpQuery = connection.query(
      "INSERT INTO `users` (`username`, `email`, `users_password`) \
      VALUES(?, ?, ?)",
      // [req.body.username, req.body.email, req.body.password, req.body.password2],
      [username, email, user_password],
      (err, results) => {
        console.log(`Err: ${err}\nResults: ${results}`);
        if (err) {
          res.status(400).json(err);
        }
      }
    );
    console.log(signUpQuery.sql);
    res.status(200).send("signUp successful");
  } catch (error) {
    console.log("Error occured:\n", error);
    res.status(400).json(err);
    // res.send(error);
  }
});

const log = console.log(`Server started on port ${PORT}`);
app.listen(PORT, log);
