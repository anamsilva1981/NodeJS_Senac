import express from 'express';
import cors from 'cors';
import db from './app/models/index.js';
import tutorialRoutes from './app/routes/tutorial.routes.js';

const app = express();

// Configuração do CORS
const corsOptions = {
  origin: '*'
  // origin: 'http://localhost:8081'
};
app.use(cors(corsOptions));

// Middleware para JSON e urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Teste de rota raiz
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo!' });
});

// Rotas
app.use('/api/tutorials', tutorialRoutes);

// Inicializa o banco de dados e inicia o servidor
const startServer = async () => {
  try {
    await db.sequelize.sync();
    console.log('Banco de dados sincronizado com sucesso.');

    const PORT = process.env.PORT || 8081;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}.`);
    });
  } catch (error) {
    console.error('Falha ao sincronizar com o banco de dados:', error.message);
    process.exit(1);
  }
};

startServer();
