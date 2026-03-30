// middlewares/auth.middleware.js
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

export const verifyToken = (req, res, next) => {
    // 1. Header se token nikaalo
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        // 2. Token verify karo
        const decoded = jwt.verify(token, config.JWT_SECRET);
        
        // 3. User data ko req.user mein daal do
        // Aapne token { id: user._id } karke sign kiya tha
        req.user = decoded; 
        
        next(); // Agle function (controller) par jao
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};