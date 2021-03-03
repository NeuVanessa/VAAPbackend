const Student = require("../models/Student");


//index, show,store,update,destroy

//index indica que irá retornar uma listagem de Sessões
//show serve para listar uma unica sessão
//store é quando quero criar uma sessão
//update alterar uma sessão
//destroy deletar uma sessão.

//POST DE REGISTRO DE NOVO USUÁRIO!
module.exports = {
  async store(req, res) {
    // const { name,registration,numbercpf,course,semester,active } = req.body;

    const { name,registration,numbercpf,course,semester,active } = req.body;
    //fazendo a verificação se usuário existe ou não
    let student = await Student.findOne({ registration:registration});

    if (!student) {
      student = await Student.create({ name,registration,numbercpf,course,semester,active});
    }

    // const user = await User.create({name,registration,numbercpf,course,semester,active});
    return res.json(student);
  },
};



