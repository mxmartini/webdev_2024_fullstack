const express = require('express')
const app = express()
const { readFileSync } = require('node:fs')

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res){

    const index = readFileSync("./public/index.html", { encoding : "utf-8" });
    res.send(index);
});

app.listen("3001");