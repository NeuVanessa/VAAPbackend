//Express é um miniframework que ajudo na definição de rotas e em outras coisas.
//importando uma dependencia externa
const express = require("express");

//importando as rotas
const routes = require("./routes");

//criando o app o express é uma função
const app = express();

//informando ao express que o tipo de requisição será json
app.use(express.json());
//o app.use deverá ser sempre colocado em baixo do express.json se não, não funcionará,
//porque o express ler coisas sequenciais.
app.use(routes);
//escolhendo a porta que a aplicação será rodada
app.listen(4000);
