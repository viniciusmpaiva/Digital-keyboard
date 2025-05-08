import mongoose from 'mongoose';
import Profile from './profile.models'; // Import the Profile model

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 3,
    maxlength: 20,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
  },

});

userSchema.pre('deleteOne', { document: true, query: false }, async function cascadeDeleteProfiles(next) {
  try {
    await Profile.deleteMany({ user: this._id });

    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('user', userSchema);

export default User;
