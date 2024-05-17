export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return formattedDate;
};
