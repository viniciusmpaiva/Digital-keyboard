import jwt from 'jsonwebtoken';
import User from '../models/user.models';

export default async function storeToken(req, res) {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(422).send({ message: 'Email not registered' });
  }

  if (user.password !== req.body.password) {
    return res.status(422).send({ message: 'Invalid password' });
  }

  const { _id, username, email } = user;

  const token = jwt.sign({ _id, email, username }, process.env.TOKEN_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRATION,
  });

  return res.send({ token });
}
