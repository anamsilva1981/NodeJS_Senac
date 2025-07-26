const mogoose = require('mongoose');
const connectDB = async () => {
    try {
        await mogoose.connect(process.env.MONGO_URI);
        console.log('MongoDB conectado com sucesso');
    }catch (err) {
        console.error('Erro na conexão: ', err.message);
        process.exit(1)
    }
}

module.exports = connectDB;