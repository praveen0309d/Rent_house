const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TARGET_EMAIL = process.env.TARGET_EMAIL;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT, 10);
const SMTP_SECURE = process.env.SMTP_SECURE === 'true';

if (!EMAIL_USER || !EMAIL_PASS || !TARGET_EMAIL || !SMTP_HOST || !SMTP_PORT) {
  console.error("❌ Missing required SMTP or email config in .env");
  process.exit(1);
}

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.post('/send-enquiry', async (req, res) => {
  const { name, email, phone, propertyType, message, preferredContact } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Website Enquiry" <${EMAIL_USER}>`,  // from your dspeh.com email
      to: TARGET_EMAIL,                           // to Info@dspeh.com
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
        <p><strong>Preferred Contact:</strong> ${preferredContact || 'Not specified'}</p>
        <p><strong>Message:</strong><br>${message}</p>
        <hr>
        <p>Sent on: ${new Date().toLocaleString()}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: '✅ Your enquiry has been sent successfully.' });

  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    res.status(500).json({ error: 'Failed to send enquiry. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
