const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = async (req, res, next) => {
    try{
        const token  = req.headers.authorization?.split(' ')[1];
        if(!token){
            return res.status(400).json({ message: "No token provided" });
        }

        const decoded = await jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch(error){
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = {
    authenticate
}
