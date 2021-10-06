const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;


const pokedex = [ ];
let message = "";

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



  app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = pokedex[id];
    res.render("detalhes", {
      pokemon,
    });
  });

app.get("/cadastro", (req, res) => {
  res.render("cadastro");
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
