const express = require('express');

//com esse const será possivel usar todos os metodos possivei. {GET,POST,PUT,DELETE}
const routes = express.Router();


//req.query = acessar p query params (para filtros)
//req.params = acessar o routes params ( Para edicao e dele )
//query.body acessar o cordo da requisicão

// req é uma requisião, será para pegar a informação
// res devolve uma reposta da requisição
routes.post("/users", (req, res) => {
    return res.json(
  req.body);
  });

  //exportando as rotas do arquivo para que a aplicação reconheça essas rotas
  module.exports = routes;

  