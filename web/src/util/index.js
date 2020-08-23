import {
  parseISO,
  formatRelative,
  isEqual,
  format,
  getDay,
  differenceInDays,
} from 'date-fns';

import { pt } from 'date-fns/locale';

const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getDateWeekName = d => {
  const date = parseISO(d);

  const count = differenceInDays(new Date(), date);

  if (count > 6) return format(date, 'dd/MM/yyyy');

  if (count === 0) return 'Today';

  if (count === 1) return 'Yesterday';

  return week[getDay(date)];
};

export const isEquableDate = (d1, d2) => {
  return (
    format(parseISO(d1), 'dd/MM/yyyy') !== format(parseISO(d2), 'dd/MM/yyyy')
  );
};

export const getTimeAndWeek = d => {
  const result = getDateWeekName(d);

  if (result === 'Today') return getTime(d);

  return result;
};

export const getTime = d => {
  const date = parseISO(d);

  return format(date, 'HH:mm');
};
