export const handleReturnYear = () => {
  const currentYear = new Date().getFullYear();
  const yearData = [];

  for (let i = 1900; i <= currentYear; i++) {
    yearData.push(i);
  }

  return yearData.reverse();
};

export const daysData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const monthData = [
  {
    name: "January",
    abbr: "Jan",
  },
  {
    name: "February",
    abbr: "Feb",
  },
  {
    name: "March",
    abbr: "Mar",
  },
  {
    name: "April",
    abbr: "Apr",
  },
  {
    name: "May",
    abbr: "May",
  },
  {
    name: "June",
    abbr: "Jun",
  },
  {
    name: "July",
    abbr: "Jul",
  },
  {
    name: "August",
    abbr: "Aug",
  },
  {
    name: "September",
    abbr: "Sep",
  },
  {
    name: "October",
    abbr: "Oct",
  },
  {
    name: "November",
    abbr: "Nov",
  },
  {
    name: "December",
    abbr: "Dec",
  },
];
