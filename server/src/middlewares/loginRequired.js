import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ errors: ['Authorization header is required'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { _id, username, email } = data;

    req._id = _id;
    req.username = username;
    req.email = email;

    return next();
  } catch (error) {
    return res.status(401).json({ errors: ['Invalid/Expired token'] });
  }
};
