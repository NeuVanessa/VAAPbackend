const Admin = require("../models/Admin");

module.exports = {
  async store(req, res) {
    // const { name,registration,numbercpf,course,semester,active } = req.body;

    const { username, password, name, email } = req.body;
    //fazendo a verificação se usuário existe ou não
    let admin = await Admin.findOne({ username: username });

    if (!admin) {
      admin = await Admin.create({ username, password, name, email });
    }
    return res.json(admin);
  },
};


