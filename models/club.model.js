import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema({
  name: String,
  stadium: String,
  budget: Number,
  coach: String,
});

const Club = mongoose.model('Clubs', clubSchema);

export default Club;
