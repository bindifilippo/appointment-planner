// Formatta una data ISO YYYY-MM-DD in formato europeo GG/MM/YYYY
export const formatEuropeanDate = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
};