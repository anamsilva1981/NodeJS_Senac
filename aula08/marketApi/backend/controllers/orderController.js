// Importa o modelo de pedidos (Order), que provavelmente é um schema do Mongoose
const Order = require('../models/Order');

// Função para buscar todos os pedidos
exports.getAll = async (req, res) => {
  // Busca todos os pedidos e popula (traz os dados completos) dos campos relacionados:
  // 'user' e 'products' são referências em cada pedido que apontam para outros documentos
  const orders = await Order.find()
    .populate('user')        // Preenche os dados completos do usuário associado
    .populate('products');   // Preenche os dados completos dos produtos associados

  // Retorna os pedidos com os dados populados como resposta JSON
  res.json(orders);
};

// Função para criar um novo pedido
exports.create = async (req, res) => {
  // Cria uma nova instância de pedido com os dados recebidos no corpo da requisição
  const order = new Order(req.body);

  // Salva o novo pedido no banco de dados
  await order.save();

  // Retorna o pedido criado com status HTTP 201 (Created)
  res.status(201).json(order);
};
