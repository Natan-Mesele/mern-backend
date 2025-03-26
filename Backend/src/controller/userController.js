const { generateToken } = require('../config/jwtProvider');
const userService = require('../service/userService');

const register = async (req, res) => {
    try{
        const user = await userService.registerUser(req.body);
        const jwt = generateToken();
        return res.status(201).json({ jwt, message: "Registration successfully done!", user});
    } catch(error){
        return res.status(500).json({ message: "fetching error"});
    }
}

const login = async (req, res) => {
    try {
        const user = await userService.loginUser(req.body);  
        const jwt = generateToken(user._id);  
        return res.status(200).json({ jwt, message: "Login successfully", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAllUser = async (req, res) => {
    try{
        const user = await userService.getAllUsers();
        return res.status(201).json({ message: " All users", user});
    }catch(error){
        return res.status(500).json({ message: error.message});
    }
}

const getUserByIds = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUserById(id);  // Ensure you're calling the right function
        const jwt = generateToken(user._id);  // Pass the user._id for token generation
        return res.status(201).json({ message: "User found:", user });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports =  {
    register,
    login,
    getAllUser,
    getUserByIds
}