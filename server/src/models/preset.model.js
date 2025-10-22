import mongoose from 'mongoose';

const presetSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },

  presetData: {
    type: [[String]],
  },

  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
    required: true,
  },

  numberOfBoxes: {
    type: Number,
    required: true,
  },
});

const Preset = mongoose.model('Preset', presetSchema);

export default Preset;
