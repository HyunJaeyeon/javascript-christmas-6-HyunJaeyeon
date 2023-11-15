const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const getDay = (date) => {
  const today = new Date(`2023, 12, ${date}`);
  return DAYS[today.getDay()];
};

const WEEK = {
  WEEKEND: ['FRI', 'SAT'],
  WEEKDAY: ['SUN', 'MON', 'TUE', 'WED', 'THU'],
  DISCOUNT: (quantity) => 2023 * quantity,
};

const X_MAS = {
  MAX_DATE: 25,
  DISCOUNT: (date) => 1000 + 100 * (date - 1),
};
const SPECIAL = {
  DATE: [3, 10, 17, 24, 25, 31],
  DISCOUNT: 1000,
};

export { getDay, WEEK, X_MAS, SPECIAL };
