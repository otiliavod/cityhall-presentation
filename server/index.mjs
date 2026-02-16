import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(express.json({ limit: "200kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// Basic spam protection: "honeypot" field must be empty
function validateContactPayload(body) {
  const errors = [];
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();
  const hp = (body.company ?? "").trim(); // honeypot

  if (hp) errors.push("Spam detected.");
  if (name.length < 2) errors.push("Name too short.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid email.");
  if (subject.length < 3) errors.push("Subject too short.");
  if (message.length < 10) errors.push("Message too short.");

  return { errors, clean: { name, email, subject, message } };
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: String(process.env.SMTP_SECURE ?? "true") === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { errors, clean } = validateContactPayload(req.body);
  if (errors.length) {
    return res.status(400).json({ ok: false, errors });
  }

  const to = process.env.MAIL_TO;
  if (!to) return res.status(500).json({ ok: false, error: "MAIL_TO missing" });

  try {
    // Optional: verify connection (useful first time)
    // await transporter.verify();

    const fromName = process.env.MAIL_FROM_NAME ?? "Contact Form";
    const fromAddress = process.env.SMTP_USER;

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to,
      replyTo: clean.email, // IMPORTANT: when you hit Reply, it goes to the citizen
      subject: `[Contact] ${clean.subject}`,
      text:
        `Nume: ${clean.name}\n` +
        `Email: ${clean.email}\n\n` +
        `Mesaj:\n${clean.message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h3>Mesaj nou din formularul de contact</h3>
          <p><b>Nume:</b> ${escapeHtml(clean.name)}</p>
          <p><b>Email:</b> ${escapeHtml(clean.email)}</p>
          <p><b>Subiect:</b> ${escapeHtml(clean.subject)}</p>
          <p><b>Mesaj:</b><br/>${escapeHtml(clean.message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Failed to send email" });
  }
});

app.listen(Number(process.env.PORT ?? 3001), () => {
  console.log(`Contact API running on http://localhost:${process.env.PORT ?? 3001}`);
});

// tiny helper to avoid HTML injection
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[m]));
}
