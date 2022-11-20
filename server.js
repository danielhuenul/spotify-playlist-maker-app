const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 4560;

const pathd = path.join(__dirname, "dist")
app.use(express.static(pathd));
app.use(express.static("public"));

app.use((req, res) => {
  res.sendFile(`${pathd}/index.html`);
});

app.listen(port, () => {
  console.log("Server on port", port);
});

