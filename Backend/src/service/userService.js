const User = require("../model/user");
const bcrypt = require('bcryptjs')

const registerUser = async (userData) => {
    try{
        const { firstname, lastname, email, password, role } = userData;

        const isExist = await User.findOne({ email: email});

        if(isExist){
            throw new Error("User is already exist!");
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const user = User.create({
            firstname,
            lastname,
            email,
            password: hashPassword,
            role
        });

        return user;
    } catch(error){
        throw new Error(error.message);
    }
}

const loginUser = async (userData) => {
    try {
        const { email, password } = userData;

        const user = await User.findOne({ email });
        
        if (!user) {
            throw new Error("User not found");  
        }

        const isMatch = await bcrypt.compare(password, user.password);  

        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        return user;  // Return the user object
    } catch (error) {
        throw new Error(error.message);  // Re-throw error with message
    }
};

const getAllUsers = async () => {
    try{
        const user = await User.find();
        if(!user){
            throw new Error("user not found");
        }
        return user;
    } catch(error){
        throw new Error(error.message);
    }
}

const getUserById = async (id) => {
    try {
        const user = await User.findOne({ _id: id });  

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById
}