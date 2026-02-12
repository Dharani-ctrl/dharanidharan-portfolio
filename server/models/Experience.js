const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isCurrent: { type: Boolean, default: false },
  description: { type: String },
  responsibilities: [{ type: String }],
  technologies: [{ type: String }],
  location: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Experience', experienceSchema);
