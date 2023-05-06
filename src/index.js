const express = require("express");

const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (res, req) => {
  res.send("hola");
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
