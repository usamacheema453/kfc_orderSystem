const mongoose= require('mongoose');

const ProductSchema = new mongoose.Schema({
    category: {type: mongoose.Schema.Types.ObjectId, ref:'Category'},
    title:{type:String, required:true},
    details: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);