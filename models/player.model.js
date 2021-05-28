import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  free_transfer: Boolean,
  club: String,
  position: String,
  email: String,
  skills: String,
  sold: Boolean,
});

const Player = mongoose.model('Players', playerSchema);

export default Player;
