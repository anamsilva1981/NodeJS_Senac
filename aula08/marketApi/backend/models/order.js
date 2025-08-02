const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prodct'}],
    tota: Number,
    date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Order', orderSchema);