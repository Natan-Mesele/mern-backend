const checkAdmin =  (req, res, next) => {
    if(req.user.role === 'ROLE_ADMIN'){
        next();
    } else {
        return res.status(500).json({ message: "Access denied. Admins only."});
    }
}

module.exports = {
    checkAdmin
}