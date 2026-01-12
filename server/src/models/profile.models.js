import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },

  presets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'preset',
  }],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

const Profile = mongoose.model('profile', profileSchema);

export default Profile;
