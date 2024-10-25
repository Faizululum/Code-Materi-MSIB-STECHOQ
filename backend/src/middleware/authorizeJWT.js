const jwt = require('jsonwebtoken');

// Authorize JWT
function authorizeJWT(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Tidak ada token! gagal mengakses fitur' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Gagal mengautentikasi token!'});
    }
};

module.exports = authorizeJWT;