'use client';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Link from 'next/link';
import { BiSolidSearchAlt2, BiUndo } from 'react-icons/bi';
import { Button } from './ui/button';

const SearchBlog = () => {
  const router = useRouter();

  const searchSchema = z.object({
    search: z.string().min(1, {
      message: 'This Field Is Required.',
    }),
  });

  const form = useForm({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: '',
    },
  });

  const onSearch = (value) => {
    router.push(`/blog?search=${value.search}`);
    // console.log(value.search);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSearch)} className='space-y-4'>
        <FormField
          control={form.control}
          name='search'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className='w-full md:w-3/4 lg:w-1/2'
                  placeholder='Search For A Blog Post...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex justify-center md:justify-start space-x-6'>
          <Button className='rounded-full bg-miraclep' type='submit'>
            Search <BiSolidSearchAlt2 className='h-5 w-5 ml-2' />
          </Button>
          <Link href='/blog'>
            <Button
              onClick={() => form.reset()}
              className='rounded-full bg-miraclep'
              type='submit'
            >
              Clear Search <BiUndo className='h-5 w-5 ml-2' />
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SearchBlog;
