// Dependencies
const express = require("express");

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.status(200).send({
    name: "Fernando",
    lastName: "Ruiz",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en: http://localhost:${PORT}`);
});
