const express = require("express");
const app = express();
const PORT = 3000;

const {createTodo, updateTodo} = require("./types")

app.use(express.json());

app.post("/todo", (req, res) => {
  res.json({
    msg: "Hello World",
  });
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {});


app.listen(PORT, (req, res) => {
    console.log(`The server is running at PORT ${PORT} ...`)
})