export const formatDateToDDMMYY = (date: Date) => {
  if (!(date instanceof Date)) {
    throw new Error("Invalid input: Expected a Date object.");
  }

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

  return `${day}/${month}/${year}`;
};
