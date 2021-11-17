const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.sendStatus(401);
  }
  const [, token] = authHeader && authHeader.split('Bearer '); // Bearer asdfwesdf.sdf.sdfsd
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user; // { username: 'Test' }

    next();
  });
}

module.exports = {
  authenticateToken,
};
