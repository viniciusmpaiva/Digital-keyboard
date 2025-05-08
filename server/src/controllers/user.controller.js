import User from '../models/user.models';

async function userExists(req) {
  const usernameExists = await User.findOne({ email: req.body.username });
  const emailExists = await User.findOne({ email: req.body.email });

  if (usernameExists || emailExists) return true;
  return false;
}

export async function postUser(req, res) {
  try {
    // Check if user already exists:
    if (await userExists(req)) {
      return res.status(422).send({ message: 'User already registered' });
    }

    // Saving user data:
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();

    res.status(201);
    res.send({ message: 'User successfully registered' });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function getAllUsers(req, res) {
  try {
    // Retrieves all users from the database
    const users = await User.find({});
    if (!users) {
      return res.status(404).send({ message: 'No users found' });
    }
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function getUserByUsername(req, res) {
  try {
    // Retrieves a user by username from the database
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function deleteUser(req, res) {
  try {
    // Deletes a user by username from the database
    const user = await User.findOneAndDelete({ username: req.params.username });
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}
