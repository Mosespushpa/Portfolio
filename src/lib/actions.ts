
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
  // Log all available environment variables for debugging
  console.log('Available environment variables on server:', JSON.stringify(process.env, null, 2));

  console.log('Received contact form data:', data);

  // === Email Addresses ===
  // These are the email addresses that will be used.
  // Replace these with your actual email addresses.
  const myEmail = 'moses21games@gmail.com'; 
  const verifiedSenderEmail = 'moses21games@gmail.com'; 


  // === SENDGRID API KEY - MUST BE AN ENVIRONMENT VARIABLE ===
  const apiKey = process.env.SENDGRID_API_KEY;

  if (!apiKey) {
    console.error('SENDGRID_API_KEY environment variable is not set. Email will not be sent.');
    return { 
      success: false, 
      message: 'Server configuration error: The SENDGRID_API_KEY environment variable is missing. Please set it in your Firebase App Hosting backend configuration and redeploy.' 
    };
  }

  if (!data.email || !data.name || !data.message) {
    return { success: false, message: 'Invalid data provided. All fields are required.' };
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to: myEmail,
    from: verifiedSenderEmail, 
    replyTo: data.email,
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
    if (error.response) {
      console.error('SendGrid error response body:', error.response.body);
    }
    return { success: false, message: 'Failed to send message due to a server error. Please try again later.' };
  }
}
