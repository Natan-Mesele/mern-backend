const cartService = require('../service/cartService')

const createCart = async (req, res) => {
    try {
        const { userId, items } = req.body; 
        const cart = await cartService.createCart(userId, items);
        return res.status(201).json({message: 'Cart created successfully!',cart});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateCart = async (req, res) => {
    try {
        const { userId, items } = req.body;
        const updatedCart = await cartService.updateCart(userId, items);
        return res.status(200).json({message: 'Cart updated successfully!',cart: updatedCart});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getCart = async (req, res) => {
    try {
        const userId = req.params.userId; 
        const cart = await cartService.getCartByUserId(userId);
        return res.status(200).json({ cart });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createCart,
    updateCart,
    getCart
};