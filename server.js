const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
// const __dirname = path.resolve();
// const publicPath = path.join(__dirname, "/build");

app.use(express.static(path.join(__dirname, "/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});
app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
