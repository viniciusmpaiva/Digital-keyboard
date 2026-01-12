import Profile from '../models/profile.models';
import User from '../models/user.models';

export async function postProfile(req, res) {
  try {
    if (!await User.findOne({ _id: req._id })) {
      return res.status(422).send({ message: 'Invalid user' });
    }

    const newProfile = new Profile({
      name: req.body.name,
      user: req._id,
    });
    await newProfile.save();
    res.send({ message: 'Profile successfully registered' });
    res.status(201);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function getAllProfiles(req, res) {
  try {
    const profiles = await Profile.find({});
    res.status(200);
    res.send(profiles);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function getUserProfilesById(req, res) {
  try {
    const user = await User.findOne({ _id: req._id });

    if (!user) {
      return res.status(422).send({ message: 'User does not exist' });
    }

    const profiles = await Profile.find({ user: req._id });

    if (!profiles || profiles.length === 0) {
      return res.status(404).send({ message: 'No profiles found for this user' });
    }

    res.status(200);
    res.send(profiles);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function deleteProfile(req, res) {
  try {
    const deletedProfile = await Profile.findByIdAndDelete(req._id);

    if (!deletedProfile) {
      return res.status(404).send({ message: 'Profile not found' });
    }

    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function updateProfile(req, res) {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        presets: req.body.presets,
      },
      { new: true },
    );

    if (!updatedProfile) {
      return res.status(404).send({ message: 'Profile not found' });
    }

    res.status(200);
    res.send(updatedProfile);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function addNewPreset(req, res) {
  try {
    const profile = await Profile.findOne({ user: req._id });

    if (!profile) {
      return res.status(404).send({ message: 'Profile not found' });
    }
    profile.presets.push(req.body.preset);
    await profile.save();

    res.status(200);
    res.send(profile);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function removePreset(req, res) {
  try {
    const profile = await Profile.findById(req.params.id);

    if (!profile) {
      return res.status(404).send({ message: 'Profile not found' });
    }

    profile.presets = profile.presets.filter(
      (preset) => preset !== req.body.preset,
    );
    await profile.save();

    res.status(200);
    res.send(profile);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
