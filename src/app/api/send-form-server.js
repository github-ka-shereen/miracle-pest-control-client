'use server';

// import { redirect } from 'next/navigation';
import { sendEmail } from './send-email';

export async function serverSendFormData(formData) {
  sendEmail(formData);
  // redirect('/thank-you');
}
