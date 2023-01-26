export function checkDateRange(date: Date): string {
  const today = new Date();
  if (date.getFullYear() === today.getFullYear()) {
    if (date.getMonth() === today.getMonth()) {
      if (
        date.getDate() >= today.getDate() - today.getDay() &&
        date.getDate() <= today.getDate() + (6 - today.getDay())
      ) {
        return 'week';
      } else {
        return 'month';
      }
    } else {
      return 'year';
    }
  } else {
    return 'Not in current year';
  }
}
