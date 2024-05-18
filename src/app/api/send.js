import { EmailTemplate } from '@/components/email-template';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const message = formData.message;
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['sherenipara@gmail.com'],
    subject: 'Website Contact',
    // react: EmailTemplate(formData),
    text: message,
  });

  if (error) {
    res.status(400).json(error);
    redirect('/about');
  } else {
  }

  res.status(200).json(data);
  redirect('/contact');
};
