
'use server';

// This file previously contained the sendContactEmail server action for SendGrid.
// It is no longer needed as Formspree handles form submissions directly from the client.
// You can remove this file if no other server actions are defined here,
// or keep it for future server-side logic.

// Example of a server action (unrelated to contact form)
// export async function myExampleServerAction(data: any): Promise<{ success: boolean }> {
//   console.log("myExampleServerAction called with:", data);
//   // ... perform some server-side logic
//   return { success: true };
// }
