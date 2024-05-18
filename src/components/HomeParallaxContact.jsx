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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { z } from 'zod';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { sendEmail } from '@/app/api/send';




const formSchema = z.object({
  full_name: z
    .string()
    .max(60, { message: 'Your Name Must Be Less Than 60 characters long' })
    .min(1, { message: 'Enter Your Name' }),
  email: z.string().email(),
  phone_number: z
    .string()
    .max(20, { message: 'Your Name Must Be Less Than 60 characters long' })
    .min(1, { message: 'Enter Your Phone Number' }),
  service: z.enum(['fumigation', 'pest-control', 'termite-control']),
  message: z
    .string()
    .max(500, { message: 'Your Name Must Be Less Than 500 characters long' }),
});

export const HomeParallaxContact = () => {


  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: '',
      email: '',
      phone_number: '',
      service: undefined,
      message: '',
    },
  });

  const handleSubmit = (formData) => {
    console.log('Submission Successful!!', formData);
    sendEmail(formData);
    form.reset();
  };

  return (
    <div className='flex gap-2 justify-center max-h-[150vh] p-4 bg-fixed bg-parallax bg-cover'>
      <div className='flex flex-col justify-center p-5 xl:p-10 mt-10 mb-10 xl:w-1/2 w-full bg-miracles'>
        <p className='text-white font-bold text-4xl'>Contact Us</p>
        <div className='mt-3 text-black w-full space-y-5 z-10'>
          <Form {...form}>
            <form
              className='space-y-5'
              onSubmit={form.handleSubmit(handleSubmit)}
            >
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
                          className='rounded-none'
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
              </div>
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
                          className='rounded-none'
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
                          <SelectTrigger className='rounded-none'>
                            <SelectValue placeholder='Select Product/ Service' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className='rounded-none'>
                          <SelectItem value='fumigation'>
                            Fumigation Services
                          </SelectItem>
                          <SelectItem value='pest-control'>
                            Pest Control
                          </SelectItem>
                          <SelectItem value='termite-control'>
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
                          className='rounded-none'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className=''>
                <Button
                  size='lg'
                  className='flex gap-1 transform motion-safe:hover:scale-105 duration-300 rounded-full border-2 border-miraclep bg-white text-miraclep hover:bg-miraclep hover:text-white hover:border-white'
                >
                  Submit
                  <Send />
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
