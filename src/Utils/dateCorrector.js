export default function dateCorrector(date) {
  if (!date) return 'Нет даты';
  const temp = date.split('-');
  const year = temp[0];
  const monthsArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = monthsArray[+temp[1]];
  const day = +temp[2];
  return `${month || '--'} ${
    day.toString().length < 2 ? `0${day}` : day
  }, ${year}`;
}
