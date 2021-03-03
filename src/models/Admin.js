const mongoose = require("mongoose");

// aqui é informado o que o usário irá ter quais são os seus dados na tabela
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Admin", AdminSchema);
