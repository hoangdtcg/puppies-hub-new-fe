import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", function (req, res) {
  res.sendFile(path.resolve("home.html"));
});
app.get("/about", function (req, res) {
  res.sendFile(path.resolve("about.html"));
});
app.get("/home", function (req, res) {
  res.sendFile(path.resolve("index.html"));
});

app.get("/leader-board", function (req, res) {
  res.sendFile(path.resolve("leader-board.html"));
});
app.get("/leader-board-2", function (req, res) {
  res.sendFile(path.resolve("leader-board-2.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.resolve("login.html"));
});
app.get("/register", function (req, res) {
  res.sendFile(path.resolve("register.html"));
});
app.get("/trader-tranding-page", function (req, res) {
  res.sendFile(path.resolve("trader-tranding-page.html"));
});
app.get("/user-detail", function (req, res) {
  res.sendFile(path.resolve("user-detail.html"));
});
app.use(express.static("."));

app.listen(port);
console.log("Server started at http://localhost:" + port);
