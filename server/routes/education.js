const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// Get all education
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ startDate: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single education
router.get('/:id', async (req, res) => {
  try {
    const edu = await Education.findById(req.params.id);
    if (!edu) return res.status(404).json({ message: 'Education not found' });
    res.json(edu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create education
router.post('/', async (req, res) => {
  const education = new Education(req.body);
  try {
    const newEducation = await education.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update education
router.patch('/:id', async (req, res) => {
  try {
    const edu = await Education.findById(req.params.id);
    if (!edu) return res.status(404).json({ message: 'Education not found' });
    Object.assign(edu, req.body);
    const updatedEducation = await edu.save();
    res.json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete education
router.delete('/:id', async (req, res) => {
  try {
    const edu = await Education.findById(req.params.id);
    if (!edu) return res.status(404).json({ message: 'Education not found' });
    await edu.deleteOne();
    res.json({ message: 'Education deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
