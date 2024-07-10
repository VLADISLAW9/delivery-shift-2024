export const getWorkingDaysString = (days) => {
  const titles = ['рабочий день', 'рабочих дня', 'рабочих дней'];
  const cases = [2, 0, 1, 1, 1, 2];

  if (days % 100 > 4 && days % 100 < 20) {
    return `${days} ${titles[2]}`;
  }

  return `${days} ${titles[cases[Math.min(days % 10, 5)]]}`;
};
