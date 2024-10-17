const express= require('express');

const router = express.Router();

const {getCategories, createCategory} = require('../controllers/categoryController');

router.get('/', getCategories);
router.post('/add', createCategory);

module.exports = router;
