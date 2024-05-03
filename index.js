const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("IG : @troverint"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
