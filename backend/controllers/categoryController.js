const Category = require('../models/Category');


exports.getCategories = async(req,res)=>{
    try{
        const categories = await Category.find();

        res.json(categories);
    }catch(err){
        res.status(500).json({message: err.message});
    }
};


exports.createCategory = async(req,res)=>{
    const {name} = req.body;

    try{
        const category = new Category({name});

        await category.save();

        res.status(201).json(category);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
};