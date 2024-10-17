const express = require('express');
const router = express.Router();
const { addProduct, getProductsByCategory } = require('../controllers/productController');
const upload = require('../middlewares/multer'); // Make sure this path is correct

router.post('/add', upload.single('image'), addProduct);
router.get('/', getProductsByCategory);

module.exports = router;
