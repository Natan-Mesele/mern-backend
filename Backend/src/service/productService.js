const Product = require("../model/product");

const products = async (productData) => {
    try{
        const {productname, description, price, quantity, image } = productData;
        const product = await Product.create({
            productname, 
            description, 
            price, 
            quantity, 
            image
        }) 
        return product;
    } catch(error){
        throw new Error(error.message);
    }
}

const getAllProduct = async () => {
    try{
        const product = await Product.find();
        if(!product){
            throw new Error("product in not found!");
        }
        return product;
    } catch(error){
        throw new Error(error.message);
    }
}

const getProductById = async (id) => {
    try{
        const product = await Product.findById(id);
        if(!product){
            throw new Error("product is not found");
        }

        return product;
    } catch(error){
        throw new Error(error.message);
    }
}

const updateProduct = async (id, productData) => {
    try{
        const {productname, description, price, quantity, image } = productData;
        const product = await Product.findByIdAndUpdate(
            id,  
            { productname, description, price, quantity, image }, 
            { new: true }  
        );

        if(!product){
            throw new Error("Product is not found");
        }

        return product;
    } catch(error){
        throw new Error(error.message);
    }
}

const deleteProduct = async (id) => {
    try {
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            throw new Error("Product not found");
        }

        return product;  
    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports = {
    products,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}