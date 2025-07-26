const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');

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