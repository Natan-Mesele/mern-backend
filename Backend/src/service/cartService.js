const Cart = require('../model/cart');

const createCart = async (userId, cartItems) => {
    try {
        const newCart = new Cart({
            userId: userId,
            items: cartItems,
            totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) 
        });

        await newCart.save();

        return newCart;
    } catch (error) {
        throw new Error('Error creating cart: ' + error.message);
    }
};

const updateCart = async (userId, cartItems) => {
    try {
        const existingCart = await Cart.findOne({ userId });

        if (!existingCart) {
            throw new Error('Cart not found');
        }

        existingCart.items = cartItems;
        existingCart.totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

        await existingCart.save();

        return existingCart;
    } catch (error) {
        throw new Error('Error updating cart: ' + error.message);
    }
};

const getCartByUserId = async (userId) => {
    try {
        const cart = await Cart.findOne({ userId });

        if (!cart) {
            throw new Error('Cart not found');
        }

        return cart;
    } catch (error) {
        throw new Error('Error fetching cart: ' + error.message);
    }
};

module.exports = {
    createCart,
    updateCart,
    getCartByUserId
};