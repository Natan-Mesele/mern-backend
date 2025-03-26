const { generateToken } = require('../config/jwtProvider');
const productService = require('../service/productService');

const product = async (req, res) => {
    try{
        const product = await productService.products(req.body);
        const jwt = generateToken();
        return res.status(201).json({ message: "Product is created!", product});
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}

const getAllProducts = async (req, res) => {
    try{
        const product = await productService.getAllProduct();
        const jwt = generateToken();
        return res.status(201).json({message: "All product", product});
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}

const getProductByIds = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await productService.getProductById(id);
        const jwt = generateToken();
        return res.status(201).json({message: "product by id: ", product});
    } catch(error){
        return res.status(500).json({message: error.message});
    }
}

const updateProducts = async (req, res) => {
    try{
        const { id } = req.params;
        const productData = req.body;
        const product = await productService.updateProduct(id, productData);
        return res.status(201).json({message: "All product", product});
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.deleteProduct(id);
        return res.status(200).json({ message: "Product deleted successfully", product });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    product,
    getAllProducts,
    getProductByIds,
    updateProducts,
    deleteProducts
}