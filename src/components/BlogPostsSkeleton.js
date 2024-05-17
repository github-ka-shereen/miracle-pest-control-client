import { Skeleton } from "./ui/skeleton";


const BlogPostsSkeleton = () => {
  return (
    <div className='lg:wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
      {[...Array(6)].map((_, index) => (
        <div key={index} className='flex flex-col lg:gap-5'>
          <Skeleton className='h-[200px] w-[300] xl:w-[350px] rounded-xl' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
            <Skeleton className='h-4 w-[100px]' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsSkeleton;
