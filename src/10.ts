// Get the current date and time
const now = new Date();

// Calculate the difference between the current date and time and the given date and time
const diff = Math.abs(now.getTime() - new Date('2023-03-14T13:37:00').getTime());

// Convert the difference to a more readable format
const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

// Print the result in a more readable format
console.log(`${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
