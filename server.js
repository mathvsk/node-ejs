const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", function (rreq, res){
  res.render("index")
})

app.listen(8080)
console.log("Rodando")