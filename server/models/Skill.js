const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  skills: [{
    name: { type: String, required: true },
    proficiency: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'], default: 'Intermediate' },
    icon: { type: String }
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Skill', skillSchema);
