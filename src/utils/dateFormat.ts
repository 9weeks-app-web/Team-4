const dateFormat = (date: Date | string) => {
  const inputDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(inputDate.getTime())) {
    throw new Error('Invalid date');
  }

  const outputDateString = inputDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return outputDateString;
};

export default dateFormat;
