export const dateToString = (date: Date) => {
  return date.toISOString().split('T')[0];
}
