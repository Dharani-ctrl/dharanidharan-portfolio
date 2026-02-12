const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/Contact');

// 1. Match the names from your terminal output
const USER = process.env.SMTP_USER || process.env.EMAIL_USER;
const PASS = process.env.SMTP_PASSWORD || process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: USER,
    pass: PASS ? PASS.replace(/\s+/g, '') : "" // Removes spaces from the App Password
  }
});

// 2. Startup Check
if (!USER || !PASS) {
  console.log("❌ EMAIL ERROR: Credentials missing in .env. Check SMTP_USER and SMTP_PASSWORD.");
} else {
  transporter.verify((error) => {
    if (error) console.error("❌ Gmail Auth Failed:", error.message);
    else console.log("✅ Email System Linked Successfully!");
  });
}

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      subject: subject || "Portfolio Inquiry",
      message
    });
    await newContact.save();

    // Send Email
    if (USER && PASS) {
      await transporter.sendMail({
        from: `"Portfolio Contact" <${USER}>`,
        to: USER, // Sends to yourself
        replyTo: email, // Direct reply to the person who messaged you
        subject: `Message from ${name}: ${subject || 'No Subject'}`,
        text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      });
      console.log(`✉️  Email sent for message from ${name}`);
    }

    res.status(201).json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error("Route Error:", error);
    res.status(500).json({ success: false, message: "Server error but data may be saved." });
  }
});

module.exports = router;