const Product = require('../models/Product');

exports.getAll = async (req, res) => {  
  const products = await Product.find().populate('category'); 
  res.json(products);
};

exports.create = async (req, res) => {   
  const product = new Product(req.body);  
  await product.save();   
  res.status(201).json(product);
};

exports.update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

exports.delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send();   
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar o produto', error });
  }
};