export const brands = ["Ford", "Toyota", "BMW"];
export const models = {
  Ford: ["Mondeo", "Focus", "Fiesta", "Fiesta", "B-Max"],
  Toyota: ["Camry", "Corolla", "RAV4"],
  BMW: ["X5", "X3", "3 Series"],
};
export const generateYears = (numYears = 40) => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: numYears }, (_, i) => currentYear - i);
};
