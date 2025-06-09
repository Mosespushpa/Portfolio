
'use server';

import sgMail from '@sendgrid/mail';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ActionResult {
  success: boolean;
  message?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
  console.log('Received contact form data:', data);

  const myEmail = process.env.MY_EMAIL_ADDRESS || 'moses21games@gmail.com'; // Your recipient email
  const verifiedSenderEmail = process.env.VERIFIED_SENDER_EMAIL || 'noreply@yourdomain.com'; // Must be a verified sender in SendGrid

  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set. Email will not be sent.');
    // For security, don't expose this specific error message to the client in production.
    // However, for development/debugging, it's useful to know.
    // In a real app, you might return a more generic error.
    return { success: false, message: 'Server configuration error. Please contact support.' };
  }

  if (!data.email || !data.name || !data.message) {
    return { success: false, message: 'Invalid data provided. All fields are required.' };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: myEmail,
    from: verifiedSenderEmail, // Use the verified sender email address
    replyTo: data.email, // So you can reply directly to the user
    subject: `New Contact Form Submission from ${data.name}`,
    text: `You have a new message from your portfolio contact form:\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    html: `
      <p>You have a new message from your portfolio contact form:</p>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error: any) {
    console.error('Error sending email with SendGrid:', error);
    // Log the detailed error on the server
    if (error.response) {
      console.error('SendGrid error response body:', error.response.body);
    }
    // Return a generic error message to the client
    return { success: false, message: 'Failed to send message due to a server error. Please try again later.' };
  }
}
