import Preset from '../models/preset.model';

export async function createPreset(req, res) {
  try {
    const newPreset = new Preset({
      name: req.body.name,
      presetData: req.body.presetData,
      profileId: req.body.profileId,
      numberOfBoxes: req.body.numberOfBoxes,
    });

    const savedPreset = await newPreset.save();
    res.status(201);
    res.send(savedPreset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function getAllPresets(req, res) {
  try {
    const presets = await Preset.find();
    res.status(200);
    res.send(presets);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function getPresetsByProfile(req, res) {
  try {
    const presets = await Preset.find({ profileId: req.params.profileId });

    res.status(200);
    res.send(presets);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function deletePreset(req, res) {
  try {
    const deletedPreset = await Preset.findByIdAndDelete(req.params.id);

    if (!deletedPreset) {
      return res.status(404).send({ message: 'Preset not found' });
    }

    res.status(200);
    res.send(deletedPreset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export async function deleteAllProfilePresets(req, res) {
  try {
    const { profileId } = req.params;

    if (!profileId) {
      return res.status(400).send({ message: 'Profile ID is required' });
    }

    const deleteResult = await Preset.deleteMany({ profileId });

    if (deleteResult.deletedCount === 0) {
      return res.status(404).send({ message: 'No presets found for this profile to delete' });
    }

    res.status(200).send({ message: `${deleteResult.deletedCount} presets deleted successfully.` });
  } catch (error) {
    res.status(500).send({ message: 'Error deleting presets', error: error.message });
  }
}

export async function updatePreset(req, res) {
  try {
    const updatedPreset = await Preset.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        presetData: req.body.presetData,
        numberOfBoxes: req.body.numberOfBoxes,
      },
      { new: true },
    );

    if (!updatedPreset) {
      return res.status(404).send({ message: 'Preset not found' });
    }

    res.status(200);
    res.send(updatedPreset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}
