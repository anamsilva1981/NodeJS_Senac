const express = require('express');
const {getAll, create, update, delete: deleteProduct } = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAll);
router.post('/', auth, create);
router.put('/:id', auth, update);
router.put('/:id', auth, deleteProduct);

module.exports = router;