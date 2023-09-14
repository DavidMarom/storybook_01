# storybook_01

🚀 [Live Storybook](https://6346c29f12cb3212588eb719-kysdmcdpcq.chromatic.com/?path=/story/card01--regular)

```
function formatDateTime(inputDateTime) {
  const parts = inputDateTime.split(' ');
  if (parts.length !== 2) {
    // Invalid input format
    return 'Invalid Date';
  }

  const datePart = parts[1];
  const timePart = parts[0];

  const date = new Date(datePart);
  if (isNaN(date)) {
    // Invalid date format
    return 'Invalid Date';
  }

  const year = date.getFullYear().toString().slice(-2); // Get the last 2 digits of the year
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
  const day = date.getDate().toString().padStart(2, '0');
  
  return `${year}.${month}.${day} ${timePart}`;
}

// Example usage:
const inputDateTime = '12:34:56.789 2023-09-14';
const formattedDateTime = formatDateTime(inputDateTime);
console.log(formattedDateTime); // Output: '23.09.14 12:34:56.789'


```
