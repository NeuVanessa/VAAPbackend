//importando uma dependencia externa
const express = require("express");

//criando o app o express é uma função
const app = express();

// req é uma requisião, será para pegar a informação
// res devolve uma reposta da requisição
app.get("/", (req, res) => {
  return res.json({

    message: "Hello World"

  });
});
//escolhendo a porta que a aplicação será rodada
app.listen(4000);

// no retoorno foi colocado o json 