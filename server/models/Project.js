const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String },
  image: { type: String },
  technologies: [{ type: String }],
  github: { type: String },
  live: { type: String },
  featured: { type: Boolean, default: false },
  category: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
