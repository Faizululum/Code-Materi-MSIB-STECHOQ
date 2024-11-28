const jwt = require('jsonwebtoken');

const adminAuthorization = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token tidak valid atau tidak ada!' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Akses ditolak! Anda bukan ADMIN.' });
        }
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error('Authorization error', error.message);
        return res.status(401).json({ message: 'Token tidak valid atau sudah kedaluwarsa!' });
    }
};

module.exports = adminAuthorization;