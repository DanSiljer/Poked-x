const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const pokedex = [ ];
let message = ""


app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.get("/", (req, res) => {

  setTimeout(() => {
    message = "";
  }, 1000);

  res.render("index", {
    pokedex ,
    message,

  });
});

app.get("/registration", (req, res) => {
  // pokedex = ["Número: ", "Nome: ", "Tipo: ", "Imagem:","Altura:","Peso:","Categoria:","habilidade:"];
  res.render("registration");

});

app.get("/detalhes", (req, res) => {
  res.render("detalhes", {pokedex: pokedex});
});

app.post("/new", (req, res) => {
  const pokemon = req.body;
  pokedex.push(pokemon);
  message = `O Pokemon  foi cadastrado!`;

  res.redirect("/");

});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
