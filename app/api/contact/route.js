
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } =
      await request.json();

    // Validate submitted data
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim() ||
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { message: "Please enter valid form details." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send enquiry details to you
    const ownerEmail = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email.trim(),
      subject: `Portfolio enquiry: ${subject.trim()}`,
      text: `
Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}
      `,
    });

    // 2. Send acknowledgement email to the visitor
    const visitorEmail = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email.trim(),
      subject: `Thank you for contacting me, ${name.trim()}!`,
      text: `
Hi ${name.trim()},

Thank you for contacting me through my portfolio!

I have received your enquiry. Here are the details you submitted:

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Your Message:
${message.trim()}

ABOUT MY SERVICES

I offer services in:

- Frontend Web Development
- React.js Website Development
- Responsive Website Design
- UI/UX Design and Prototyping

I will review your enquiry and get back to you as soon as possible.

Thank you for your time and interest!

Best regards,
Keerthi
      `,
    });

    // Wait for both emails to be sent
    await Promise.all([ownerEmail, visitorEmail]);

    return NextResponse.json(
      {
        message:
          "Your message has been sent successfully! A confirmation email has been sent to you.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Unable to send your message. Please try again." },
      { status: 500 }
    );
  }
}
