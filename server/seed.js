const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import Models
const Education = require('./models/Education');
const Experience = require('./models/Experience');
const Project = require('./models/Project');
const Skill = require('./models/Skill');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dharani-portfolio';

const educationData = [
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "Dhanalakshmi Srinivasan College of Engineering , Coimbatore - TamilNadu",
    field: "Computer Science",
    startDate: new Date("2022-10-01"),
    endDate: new Date("2026-06-01"),
    description: "Core focus on a digital or physical showcase of a student’s technical skills, academic projects, internships, and coding proficiency to demonstrate their readiness for software development roles.",
    location: "Online"
  },
  {
    degree: "Full-Stack Web Development Bootcamp",
    institution: "Coding Academy",
    field: "Full Stack Development",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2023-01-01"),
    description: "Comprehensive training in MERN stack with emphasis on scalable application architecture.",
    location: "Remote"
  }
];

const experienceData = [
  {
    jobTitle: "JavaScript Developer", // Fixed: Was 'role'
    company: "OlovaJS (Sera Programmer)",
    startDate: new Date("2023-01-01"),
    isCurrent: true,
    description: "Contributed to developing JavaScript libraries and enhancing framework functionalities.",
    technologies: ["JavaScript", "TypeScript", "Node.js"], // Fixed: Was objects, now strings
    location: "Remote"
  },
  {
    jobTitle: "Junior Frontend Developer",
    company: "Sera Programmer",
    startDate: new Date("2021-01-01"),
    endDate: new Date("2023-01-01"),
    description: "Assisted in building and optimizing user interfaces.",
    technologies: ["React", "Tailwind CSS"],
    location: "Hybrid"
  }
];

const projectData = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with product catalog and shopping cart.",
    technologies: ["React", "Node.js", "MongoDB"], // Fixed: Field name is 'technologies' in your Project.js
    github: "https://github.com",
    live: "https://example.com",
    image: "/placeholder.jpg",
    featured: true
  }
];

const skillData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", proficiency: "Advanced" },
      { name: "TypeScript", proficiency: "Intermediate" }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: "Advanced" },
      { name: "MongoDB", proficiency: "Intermediate" }
    ]
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Education.deleteMany({});
    await Experience.deleteMany({});
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Insert new data
    await Education.insertMany(educationData);
    await Experience.insertMany(experienceData);
    await Project.insertMany(projectData);
    await Skill.insertMany(skillData);

    console.log('Successfully Seeded Database! 🌱');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();