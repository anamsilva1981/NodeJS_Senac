const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
// const cors = require('cors'); usado para que o front possa acessar a api

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/orders', orderRoutes);

//MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB conectado');
    app.listen(process.env.PORT, () => 
        console.log(`Servidor rodando na porta ${process.env.PORT}`)
    );
}).catch(err => console.error('Erro ao conectar ao BF'. err))