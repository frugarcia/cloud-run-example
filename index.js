// Dependencies
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send({
    name: "Fernando",
    lastName: "Ruiz",
  });
});

app.listen(port, () => {
  console.log(`Servidor iniciado en: http://localhost:${port}`);
});
