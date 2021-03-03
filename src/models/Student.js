const mongoose = require("mongoose");

// aqui é informado o que o usário irá ter quais são os seus dados na tabela
const StudentSchema = new mongoose.Schema({
  name: String,
  registration: Number,
  numbercpf: String,
  course: String,
  semester: String,
  active: Boolean

});

module.exports = mongoose.model("Student", StudentSchema);
