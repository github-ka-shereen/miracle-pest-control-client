import fetchBlogs from '@/lib/fetch-blogs';
import { formatDate } from '@/lib/formatDate';
import Image from 'next/image';
import Link from 'next/link';

import { BiCalendarWeek, BiSolidBookOpen } from 'react-icons/bi';
import { BiNews } from 'react-icons/bi';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import config from '@/config';

const BlogPosts = async ({ page, pageSize, search }) => {
  const blogs = await fetchBlogs({ page, pageSize, search });
  const sortedPosts = blogs.data;

  return (
    <>
      {sortedPosts.length === 0 && (
        <div className='flex flex-col items-center space-y-10'>
          <p className='text-center mt-5 text-4xl text-red-400 '>
            No Posts Found...
          </p>
          <BiNews className='w-36 h-36 md:w-[30rem] md:h-[30rem] text-red-400' />
        </div>
      )}

      <div className='lg:wrapper mb-2 text-calderwoods lg:-mb-6'>
        <p className='font-normal'>{`Page ${blogs.meta.pagination.page} : Total No. of Pages ${blogs.meta.pagination.pageCount}`}</p>
      </div>

      <div className='lg:wrapper xl:grid-cols-3 sm:grid-cols-2 grid grid-cols-1 gap-5'>
        {sortedPosts?.map((blog) => {
          const publish_date = formatDate(blog.attributes.publishedAt);
          // console.log(blog.id)
          return (
            <div
              key={blog.id}
              className='flex flex-col gap-2 shadow-lg rounded-md '
            >
              <Link href={`/blog/${blog?.attributes.slug}`}>
                <Image
                  src={`${config.api}${blog?.attributes.Thumbnail.data.attributes.url}`}
                  // src={blog?.attributes.Thumbnail.data.attributes.url} // For Production
                  className='select-none w-full h-60 object-cover rounded-t-md relative'
                  alt={blog.attributes.Title}
                  width={500}
                  height={500}
                />
              </Link>
              <div className='p-3'>
                <Link href={`/blog/${blog?.attributes.slug}`}>
                  <p className='text-xl md:text-3xl text-primary'>
                    {blog.attributes.Title}
                  </p>
                </Link>
                <p>{blog?.attributes.Summary}</p>
                <div className='flex flex-col items-start gap-2 mt-3'>
                  <div className='flex items-center gap-1 text-[25385a]'>
                    <BiCalendarWeek className='hidden lg:inline' />
                    <p className='text-md'>{publish_date}</p>
                  </div>
                  <Link href={`/blog/${blog?.attributes.slug}`}>
                    <Button className='rounded-full bg-[#0e629a]'>
                      <BiSolidBookOpen className='mx-1' width={16} />
                      View More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination className=' mb-10 mt-8'>
        <PaginationContent>
          <PaginationItem>
            <Button
              className='pr-3'
              variant='outline'
              disabled={page < 2 || sortedPosts.length === 0}
            >
              <Link
                className='flex items-center'
                href={{
                  pathname: '/blog',
                  query: {
                    ...(search ? { search } : {}),
                    page: page - 1,
                  },
                }}
              >
                <ChevronLeft className='h-5 w-5' />
                <p className='hidden md:block text-xl'> Previous</p>
              </Link>
            </Button>
          </PaginationItem>
          <PaginationItem>
            {page === 1 ? (
              <span
                aria-hidden
                className='flex h-9 w-9 items-center justify-center'
              >
                <MoreHorizontal className='h-4 w-4' />
                <span className='sr-only'>More pages</span>
              </span>
            ) : (
              <Button className='pl-3 mx-2' variant='outline'>
                <Link
                  className=''
                  href={{
                    pathname: '/blog',
                    query: {
                      ...(search ? { search } : {}),
                      page: page - 1,
                    },
                  }}
                >
                  <p className='text-xl ml-1'>{page - 1}</p>
                </Link>
              </Button>
            )}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href=''
              className='bg-miraclep hover:bg-miracles text-white'
              isActive
            >
              {page}
            </PaginationLink>
          </PaginationItem>
          {page === blogs?.meta.pagination.pageCount ||
          sortedPosts.length === 0 ? (
            ''
          ) : (
            <PaginationItem>
              <Button
                className='pl-3 mx-2'
                disabled={
                  page === blogs?.meta.pagination.pageCount ||
                  sortedPosts.length === 0
                }
                variant='outline'
              >
                <Link
                  className='flex items-center justify-center'
                  href={{
                    pathname: '/blog',
                    query: {
                      ...(search ? { search } : {}),
                      page: page + 1,
                    },
                  }}
                >
                  <p className='text-xl ml-1'>{page + 1}</p>
                </Link>
              </Button>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <Button
              className='pl-3'
              disabled={
                page === blogs?.meta.pagination.pageCount ||
                sortedPosts.length === 0
              }
              variant='outline'
            >
              <Link
                className='flex items-center'
                href={{
                  pathname: '/blog',
                  query: {
                    ...(search ? { search } : {}),
                    page: page + 1,
                  },
                }}
              >
                <p className='hidden md:block text-xl'>Next</p>
                <ChevronRight className='h-5 w-5' />
              </Link>
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BlogPosts;
