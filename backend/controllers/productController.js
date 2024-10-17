const Category = require('../models/Category');
const Product = require('../models/Product');



exports.addProduct = async (req, res) => {
    const { category, title, details, price } = req.body;
    const image = req.file ? req.file.path : ''; // Ensure the image file exists in the request
  
    try {
        const product = new Product({ category, title, details, price, image });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Failed to add product due to server error." });
    }
};

exports.getProductsByCategory = async (req, res) => {
     // Ensure `req.query.names` is treated as an array
     const categoryName = Array.isArray(req.query.names) ? req.query.names : [req.query.names];
   

    
    try {
        const category = await Category.find({name: { $in: categoryName}});
        
        if (!category.length) {
            return res.status(404).json({ message: "Category not found" });
        }
        const products = await Product.find({category: { $in: category.map(cat => cat._id)}}).populate('category', 'name');

        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error" });
    }
};
