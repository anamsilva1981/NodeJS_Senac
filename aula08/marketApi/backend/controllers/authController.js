const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const user = new User(req.body);      // Cria um novo usuário com os dados recebidos no corpo da requisição
  await user.save();                    // Salva o usuário no banco de dados
  res.status(201).json({ message: 'Usuário Registrado' });  // Retorna uma resposta de sucesso
};


exports.login = async (req, res) => {
  const { email, password } = req.body;                   // Extrai email e senha da requisição
  const user = await User.findOne({ email });             // Procura o usuário pelo email

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Credenciais Inválidas' });  // Erro se não encontrou ou senha errada
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);     // Gera token JWT com ID do usuário
  res.json({ token });                                                  // Retorna o token ao cliente
};

