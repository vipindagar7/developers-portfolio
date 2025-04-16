import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;
        console.log(name, email, message)

        if (!name || !email) {
            return new Response(JSON.stringify({ message: 'Missing name or email' }), {
                status: 400,
            });
        }

        // Configure transporter
        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // your Gmail address
                pass: process.env.EMAIL_PASS, // your Gmail app password
            },
        });
        // Email to Admin
        await transporter.sendMail({
            from: `"Contact Bot" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL, // Replace with your admin email
            subject: `New Contact Submission from ${name}`,
            html: `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb; color: #111827;">
  <h2 style="color: #2563eb;">🚀 New Contact Submission</h2>
  <p><strong>Name:</strong> <span style="color: #4b5563;">${name}</span></p>
  <p><strong>Email:</strong> <span style="color: #4b5563;">${email}</span></p>
  <p><strong>Message:</strong></p>
  <div style="background-color: #f3f4f6; padding: 10px 15px; border-radius: 6px; color: #374151;">
    <em>${message}</em>
  </div>
  <hr style="margin-top: 20px;" />
  <p style="font-size: 14px; color: #6b7280;">This message was sent via your website contact form.</p>
</div>
`,
        });

        // Email to User
        await transporter.sendMail({
            from: `"Vipin Dagar" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Thanks for reaching out, ${name}!`,
            html: `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9fafb; color: #111827;">
  <h2 style="color: #10b981;">👋 Hi ${name},</h2>
  <p>Thanks for reaching out! We’ve received your message and our team will get back to you shortly.</p>
  <p>If it’s urgent, feel free to reply to this email directly.</p>

  <div style="margin-top: 20px;">
    <h3 style="color: #2563eb;">📝 Your Message:</h3>
    <div style="background-color: #f3f4f6; padding: 12px 16px; border-radius: 6px; color: #374151; font-style: italic;">
      ${message}
    </div>
  </div>

  <div style="margin-top: 30px;">
    <p style="color: #6b7280;">Warm regards,</p>
    <p style="font-weight: bold; color: #111827;">Vipin Dagar</p>
  </div>
</div>
`,
        });

        return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
        });
    }
}
