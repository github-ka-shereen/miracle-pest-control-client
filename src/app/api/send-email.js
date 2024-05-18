
import EmailTemplate from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const { data, error } = await resend.emails.send({
    from: 'website@mpce.co.za',
    to: ['info@mpce.co.za'],
    subject: 'New Message from Your Website',
    react: EmailTemplate(formData),
    // text: message,
  });

  if (error) {
    console.log('Error', error);
  } else {
  }

  console.log('Data', data);
};
