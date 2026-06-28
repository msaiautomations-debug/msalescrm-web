import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5050;
const DEMO_RECIPIENT = process.env.DEMO_RECIPIENT || 'msaiautomations@gmail.com';
const DEFAULT_FRONTEND_ORIGINS = ['http://127.0.0.1:5173', 'http://localhost:5173'];
const FRONTEND_ORIGINS = (process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const allowedOrigins = FRONTEND_ORIGINS.length ? FRONTEND_ORIGINS : DEFAULT_FRONTEND_ORIGINS;

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Not allowed by CORS'));
  },
}));
app.use(express.json({ limit: '1mb' }));

const requiredFields = ['name', 'email', 'company', 'teamSize', 'crmNeed', 'callTime'];

function clean(value) {
  return String(value || '').trim();
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error('SMTP settings are missing. Add SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.');
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/demo-request', async (req, res) => {
  const details = {
    name: clean(req.body.name),
    email: clean(req.body.email),
    phone: clean(req.body.phone),
    company: clean(req.body.company),
    teamSize: clean(req.body.teamSize),
    crmNeed: clean(req.body.crmNeed),
    callTime: clean(req.body.callTime),
    notes: clean(req.body.notes),
  };

  const missing = requiredFields.filter((field) => !details[field]);
  if (missing.length) {
    return res.status(400).json({ ok: false, message: `Missing required fields: ${missing.join(', ')}` });
  }

  try {
    const transporter = createTransporter();
    const from = process.env.MAIL_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from,
      to: DEMO_RECIPIENT,
      replyTo: details.email,
      subject: `New MSales CRM demo request from ${details.name}`,
      text: [
        'New MSales CRM demo request',
        '',
        `Name: ${details.name}`,
        `Work email: ${details.email}`,
        `Phone: ${details.phone || 'Not provided'}`,
        `Company: ${details.company}`,
        `Sales team size: ${details.teamSize}`,
        `CRM need: ${details.crmNeed}`,
        `Preferred call time: ${details.callTime}`,
        `Notes: ${details.notes || 'None'}`,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1A1A2E; line-height: 1.5;">
          <h2>New MSales CRM demo request</h2>
          <p><strong>Name:</strong> ${escapeHtml(details.name)}</p>
          <p><strong>Work email:</strong> ${escapeHtml(details.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(details.phone || 'Not provided')}</p>
          <p><strong>Company:</strong> ${escapeHtml(details.company)}</p>
          <p><strong>Sales team size:</strong> ${escapeHtml(details.teamSize)}</p>
          <p><strong>CRM need:</strong> ${escapeHtml(details.crmNeed)}</p>
          <p><strong>Preferred call time:</strong> ${escapeHtml(details.callTime)}</p>
          <p><strong>Notes:</strong> ${escapeHtml(details.notes || 'None')}</p>
        </div>
      `,
    });

    res.json({ ok: true, message: 'Demo request sent.' });
  } catch (error) {
    console.error('Demo request mail failed:', error);
    res.status(500).json({ ok: false, message: 'Could not send the demo request right now.' });
  }
});

app.listen(PORT, () => {
  console.log(`MSales backend listening on http://127.0.0.1:${PORT}`);
});