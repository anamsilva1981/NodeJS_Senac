import db from '../models/index.js';
const Tutorial = db.tutorials;
const { Op } = db.Sequelize;

// Cria e salva um novo tutorial
export const create = async (req, res) => {
  try {
    const { title, description, published } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Conteúdo não pode estar vazio!' });
    }

    const tutorial = await Tutorial.create({       
      title,
      description,
      published: published ?? false,
    });

    res.status(201).json(tutorial);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Erro ao criar o tutorial.' });
  }
};

// Busca todos os tutoriais
export const findAll = async (req, res) => {
  try {
    const { title } = req.query;
    const condition = title ? { title: { [Op.like]: `%${title}%` } } : undefined;

    const data = await Tutorial.findAll({ where: condition });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Erro ao recuperar tutoriais.' });
  }
};

// Busca um tutorial por ID
export const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Tutorial.findByPk(id);

    if (!data) {
      return res.status(404).json({ message: `Tutorial com id=${id} não encontrado.` });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar tutorial com id=' + id });
  }
};

// Atualiza tutorial
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Tutorial.update(req.body, { where: { id } });

    if (updated) {
      res.json({ message: 'Tutorial atualizado com sucesso.' });
    } else {
      res.status(404).json({ message: `Não foi possível atualizar o Tutorial com id=${id}.` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar tutorial com id=' + id });
  }
};

// Deleta tutorial
export const deleteTutorial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tutorial.destroy({ where: { id } });

    if (deleted) {
      res.json({ message: 'Tutorial deletado com sucesso!' });
    } else {
      res.status(404).json({ message: `Tutorial com id=${id} não encontrado.` });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar tutorial com id=' + id });
  }
};

// Deleta todos os tutoriais
export const deleteAll = async (req, res) => {
  try {
    const numDeleted = await Tutorial.destroy({ where: {}, truncate: false });
    res.json({ message: `${numDeleted} tutoriais foram deletados com sucesso.` });
  } catch (err) {
    res.status(500).json({ message: err.message || 'Erro ao remover todos os tutoriais.' });
  }
};

// Busca todos os tutoriais publicados
export const findAllPublished = async (_req, res) => {
  try {
    const data = await Tutorial.findAll({ where: { published: true } });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Erro ao recuperar tutoriais publicados.' });
  }
};

// Busca todos os tutoriais que não foram publicados (corrigir rota não esta sendo chamada na API)
export const findAllNotPublished = async (_req, res) => {
  try {
    const data = await Tutorial.findAll({ where: { published: false } });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message || 'Erro ao recuperar tutoriais que não foram publicados.' });
  }
};
