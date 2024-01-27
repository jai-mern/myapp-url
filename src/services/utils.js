export const formatDate = (date) => {
    // Placeholder logic for formatting date
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  };
  export const capitalizeString = (str) => {
    // Check if the string is empty or null
    if (!str) return '';
  
    // Capitalize the first character and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  