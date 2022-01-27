const express = require("express")
const app = express()

app.set("view engine", "ejs")

app.get("/", function (req, res){
  const itens = [
    { title: "D",
      message: "esenvovler app de forma fácil"},
    
    { title: "E",
      message: "JS usa JS para renderizar HTML"},

    { title: "M",
      message: "uito fácil de usar"},

    { title: "A",
      message: "mrozinho"},

    { title : "I",
      message: "nstall EJS"},

    { title: "S",
      message: "eja Foda"}
  ]

  const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JS"
  res.render("pages/index", {
    qualidades: itens,
    subtitle: subtitle
  })
})

app.get("/sobre", function (req, res){
  res.render("pages/sobre")
})

app.listen(8080)
console.log("Rodando")