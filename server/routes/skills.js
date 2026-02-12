const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get skills by category
router.get('/:category', async (req, res) => {
  try {
    const skill = await Skill.findOne({ category: req.params.category });
    if (!skill) return res.status(404).json({ message: 'Category not found' });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create skill
router.post('/', async (req, res) => {
  const skill = new Skill(req.body);
  try {
    const newSkill = await skill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update skill
router.patch('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });
    Object.assign(skill, req.body);
    const updatedSkill = await skill.save();
    res.json(updatedSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
