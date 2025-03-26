const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String, 
        required: false 
    },
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
