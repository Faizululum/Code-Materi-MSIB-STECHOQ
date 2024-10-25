const jwt = require('jsonwebtoken');

const adminAuthorization = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Tidak ada token! gagal mengakses fitur' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Akses ditolak! '});
        }
        next();
    } catch (error) {
        console.error('Authorization error', error.message);
        return res.status(401).json({ message: 'Gagal mengautentikasi token!'});
    }
};

module.exports = adminAuthorization;