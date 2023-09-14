# storybook_01

🚀 [Live Storybook](https://6346c29f12cb3212588eb719-kysdmcdpcq.chromatic.com/?path=/story/card01--regular)

```

const dateParts = inputDate.split('-');
  if (dateParts.length !== 3) {
    // Invalid input format
    return 'Invalid Date';
  }

  const year = dateParts[0].slice(-2); // Get the last 2 digits of the year
  const month = dateParts[1];
  const day = dateParts[2];

  return `${day}.${month}.${year}`;


```
