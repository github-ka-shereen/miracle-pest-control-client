'use client';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { z } from 'zod';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2Icon, Send } from 'lucide-react';
import { serverSendFormData } from '@/app/api/send-form-server';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import axios from 'axios';

const formSchema = z.object({
  full_name: z
    .string()
    .max(60, { message: 'Your Name Must Be Less Than 60 characters long' })
    .min(1, { message: 'Enter Your Name' }),
  // email: z.string().email(),
  phone_number: z
    .string()
    .max(20, { message: 'Your Name Must Be Less Than 60 characters long' })
    .min(1, { message: 'Enter Your Phone Number' }),
  service: z.enum(['Fumigation Services', 'Pest Control', 'Termite Control']),
  message: z
    .string()
    .max(500, { message: 'Your Name Must Be Less Than 500 characters long' }),
});

export const HomeParallaxContact = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      // email: '',
      phone_number: '',
      service: undefined,
      message: '',
    },
  });

  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    if (!executeRecaptcha) {
      console.log('Recaptcha Not Working!!!');
      return;
    }

    const gRecaptchaToken = await executeRecaptcha('pestControlFormSubmit');

    const response = await axios({
      method: 'post',
      url: '/api/recaptchaSubmit',
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    if (response?.data?.success === true) {
      form.reset();
      await serverSendFormData(formData);
      // console.log('Submission Successful!!', formData);
      setSubmitting(false);
      router.push('/thank-you');
    } else {
      console.log(`Failed: ${response?.data?.score}`);
      setSubmitting(false);
      router.push('/thank-you');
    }
  };

  return (
   
      <Form {...form}>
        <form className='space-y-5' onSubmit={form.handleSubmit(handleSubmit)}>
          <div>
            <FormField
              control={form.control}
              name='full_name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Enter Your Full Name'
                      type='text'
                      {...field}
                      className='rounded-none border-2'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id='email'
                    placeholder='Enter Your Email'
                    {...field}
                    className='rounded-none'
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}
          <div>
            <FormField
              control={form.control}
              name='phone_number'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Enter Your Phone Number'
                      {...field}
                      className='rounded-none border-2'
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name='service'
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className='rounded-none border-2'>
                        <SelectValue placeholder='Select Product/ Service' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className='rounded-none border-2'>
                      <SelectItem value='Fumigation Services'>
                        Fumigation Services
                      </SelectItem>
                      <SelectItem value='Pest Control'>Pest Control</SelectItem>
                      <SelectItem value='Termite Control'>
                        Termite Control
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      type='text'
                      placeholder='Type your message here...'
                      className='rounded-none border-2'
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=''>
            {!submitting ? (
              <Button
                size='lg'
                className='flex gap-1 transform motion-safe:hover:scale-105 duration-300 rounded-full border-2 border-miraclep bg-white text-miraclep hover:bg-miraclep hover:text-white hover:border-white'
              >
                Submit
                <Send />
              </Button>
            ) : (
              <Button
                size='lg'
                disabled
                className='flex gap-1 transform motion-safe:hover:scale-105 duration-300 rounded-full border-2 border-miraclep bg-white text-miraclep hover:bg-miraclep hover:text-white hover:border-white'
              >
                Sending...
                <Loader2Icon className='animate-spin' />
              </Button>
            )}
          </div>
        </form>
      </Form>
  );
};
