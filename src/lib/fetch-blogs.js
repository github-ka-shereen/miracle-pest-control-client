import config from '@/config';
import qs from 'qs';



const fetchBlogs = async ({ page = 0, pageSize = 100, search } = {}) => {
  const query = qs.stringify(
    {
      sort: ['publishedAt:desc'],
      pagination: {
        page,
        pageSize,
      },
      filters: {
        BlogArticle: {
          $containsi: search,
        },
      },
    },

    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: {
      revalidate: 300, //One Hour is 3600 seconds, 300 is 5 minutes
    },
  };

  // cache: 'no-cache', //Fetch all the time

  // await new Promise((resolve) => setTimeout(resolve, 3000));
  
  const request = await fetch(
    `${config.api}/api/blogs?populate=*&filters[category][$eq]=miraclepestcontrol&${query}`,
    reqOptions
  );
  const response = await request.json();
  return response;
};

export default fetchBlogs;
