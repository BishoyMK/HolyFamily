import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ContactBody = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = (await request.json()) as ContactBody;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email content
    const mailOptions: nodemailer.SendMailOptions = {
      to: 'bishoymamdouh20@gmail.com',
      from:
        process.env.EMAIL_FROM ||
        process.env.SMTP_USER ||
        process.env.EMAIL_USER ||
        'no-reply@example.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #071D54; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Name:</strong>
            <p style="margin: 5px 0; color: #666;">${name}</p>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Email:</strong>
            <p style="margin: 5px 0; color: #666;">${email}</p>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Phone:</strong>
            <p style="margin: 5px 0; color: #666;">${phone || 'Not provided'}</p>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Message:</strong>
            <p style="margin: 5px 0; color: #666; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send email via Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT || 465),
        secure: true,
        auth: {
          user: process.env.SMTP_USER || process.env.EMAIL_USER,
          pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail(mailOptions);
      console.log('Message sent successfully');

      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    } catch (sendError) {
      console.error('Error sending email:', sendError);

      const errorMessage = 'Failed to send email. Please try again later.';
      return NextResponse.json(
        { message: errorMessage },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { message: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
} 