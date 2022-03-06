const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    return res.status(401).send('A token is required for authentification');
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(403).send('Invalid Token');
  }
  return next();
};
module.exports = authenticateToken;
