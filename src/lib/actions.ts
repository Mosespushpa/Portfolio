'use server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ActionResult {
  success: boolean;
  message?: string;
}

// Placeholder for actual email sending logic (e.g., using SendGrid)
export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
  console.log('Received contact form data:', data);

  // Simulate API call / email sending
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate success
  if (data.email && data.name && data.message) {
    // In a real app, you would use an email service here
    // For example, with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // const msg = {
    //   to: 'your-email@example.com', // Change to your recipient
    //   from: 'noreply@yourdomain.com', // Change to your verified sender
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    //   html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong> ${data.message}</p>`,
    // };
    // try {
    //   await sgMail.send(msg);
    //   return { success: true, message: 'Your message has been sent successfully!' };
    // } catch (error) {
    //   console.error('SendGrid error:', error);
    //   return { success: false, message: 'Failed to send message due to a server error.' };
    // }
    return { success: true, message: 'Your message has been sent successfully! (Simulated)' };
  } else {
    return { success: false, message: 'Invalid data provided. (Simulated)' };
  }
}
