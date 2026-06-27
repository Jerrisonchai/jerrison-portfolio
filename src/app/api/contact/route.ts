export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SENDER = 'jerrcoc1@gmail.com';
const SENDER_PASS = 'znlf knck zras xvoj';
const RECIPIENT = 'jerrisonchai@gmail.com';

interface ContactBody {
  name: string;
  email: string;
  reason: string;
  message: string;
}

function validate(body: ContactBody): string | null {
  if (!body.name || body.name.trim().length < 2) return 'Name must be at least 2 characters.';
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return 'Please enter a valid email address.';
  if (!body.reason) return 'Please select a reason for contacting.';
  if (!body.message || body.message.trim().length < 10) return 'Message must be at least 10 characters.';
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();

    // Validate
    const err = validate(body);
    if (err) {
      return NextResponse.json({ success: false, error: err }, { status: 400 });
    }

    // Sanitize
    const name = body.name.trim().slice(0, 100);
    const email = body.email.trim().toLowerCase().slice(0, 200);
    const reason = body.reason.trim().slice(0, 100);
    const message = body.message.trim().slice(0, 2000);

    // Email content
    const subject = `Portfolio Contact: ${reason} — from ${name}`;
    const html = `
<!DOCTYPE html>
<html>
<body style="font-family:Inter,system-ui,sans-serif;background:#f5f5f5;padding:20px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)">
    <div style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:32px 24px;text-align:center">
      <h2 style="color:#fff;margin:0;font-size:20px">📬 New Portfolio Inquiry</h2>
    </div>
    <div style="padding:24px">
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;font-weight:600;color:#333;width:80px">Name</td><td style="color:#555">${name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;color:#333">Email</td><td style="color:#3B82F6">${email}</td></tr>
        <tr><td style="padding:8px 0;font-weight:600;color:#333">Reason</td><td style="color:#555">${reason}</td></tr>
      </table>
      <div style="margin-top:16px;padding:16px;background:#f8f9fb;border-radius:8px;border-left:4px solid #3B82F6">
        <p style="margin:0;color:#444;white-space:pre-wrap;font-size:14px;line-height:1.6">${message}</p>
      </div>
    </div>
    <div style="background:#f8f9fb;padding:16px 24px;text-align:center">
      <p style="margin:0;color:#999;font-size:12px">Sent from jerrison-portfolio.vercel.app · ${new Date().toISOString()}</p>
    </div>
  </div>
</body>
</html>`;

    // Send email via SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: SENDER, pass: SENDER_PASS },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SENDER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error('Contact form error:', e.message || e);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
