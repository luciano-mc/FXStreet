import { format } from 'date-fns';

const useDateFormat = (date, formatString = 'MMM d, HH:mm') => {
  return format(new Date(date), formatString);
};

export default useDateFormat;
