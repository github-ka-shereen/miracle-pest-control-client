import config from '@/config';

const fetchSingleBlog = async (params) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    next: {
      revalidate: 300, //One Hour is 3600 seconds, 300 is 5 minutes
    },
  };
  const request = await fetch(
    `${config.api}/api/blogs?populate=*&filters[category][$eq]=miraclepestcontrol&${params}`,
    reqOptions
  );
  const response = await request.json();
  return response;
};

export default fetchSingleBlog;
