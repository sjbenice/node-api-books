const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'your_jwt_secret';

exports.authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

exports.checkAdmin = (req, res, next) => {
    if (!(req.user.role & 4)) { // Assuming 4 is the bit mask for admin role
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};
