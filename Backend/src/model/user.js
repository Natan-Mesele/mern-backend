const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname:  {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'ROLE_USER',
        enum: ['ROLE_ADMIN','ROLE_USER']
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;