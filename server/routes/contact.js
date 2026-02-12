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
    to: USER,
    replyTo: email,
    subject: `📩 New Message from ${name}: ${subject || 'No Subject'}`,
    html: `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f7fa; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); overflow: hidden;">
        <div style="background-color: #4a90e2; color: #fff; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Contact Message</h1>
        </div>
        <div style="padding: 20px; color: #333;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
          <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="white-space: pre-wrap;">${message}</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="background-color: #4a90e2; color: #fff; padding: 12px 25px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block;">
              Reply to ${name}
            </a>
          </div>
        </div>
        <div style="background-color: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #777;">
          This message was sent from your portfolio contact form.
        </div>
      </div>
    </div>
    `
  });
  console.log(`✉️ Styled modern email sent for message from ${name}`);
}


    res.status(201).json({ success: true, message: 'Message received!' });
  } catch (error) {
    console.error("Route Error:", error);
    res.status(500).json({ success: false, message: "Server error but data may be saved." });
  }
});

module.exports = router;