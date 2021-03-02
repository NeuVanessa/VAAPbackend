//Express é um miniframework que ajudo na definição de rotas e em outras coisas.
//importando uma dependencia externa
const express = require("express");

//importando o mongoose
const mongoose = require("mongoose");
//importando as rotas
const routes = require("./routes");

//criando o app o express é uma função
const app = express();
//fazendo a conexão, dentro do atlas tem uma opção em conectar que se chama = connect your application seleciono e pego o caminho no 2 - add your connection, em driver eu escolhi o node.js em versão 3.6 se da erros futuro é só colocar a versão2
mongoose.connect(
  "mongodb://unirb:unirb@cluster0-shard-00-00.mbhdf.mongodb.net:27017,cluster0-shard-00-01.mbhdf.mongodb.net:27017,cluster0-shard-00-02.mbhdf.mongodb.net:27017/unirbapp?ssl=true&replicaSet=atlas-njj9lr-shard-0&authSource=admin&retryWrites=true&w=majority",

  {
    //tava dando um erro foi resolvido colocando esses dois paramentos abaixo
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//informando ao express que o tipo de requisição será json
app.use(express.json());
//o app.use deverá ser sempre colocado em baixo do express.json se não, não funcionará,
//porque o express ler coisas sequenciais.
app.use(routes);
//escolhendo a porta que a aplicação será rodada
app.listen(4000);
