const express = require("express");
const app = express();
const router = require("./router");
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(cors());
app.use(router);

// app.listen(3000);

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});