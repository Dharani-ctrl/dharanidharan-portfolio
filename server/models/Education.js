const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  field: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  grade: { type: String },
  description: { type: String },
  courses: [{ type: String }],
  achievements: [{ type: String }],
  location: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Education', educationSchema);
