# storybook_01

🚀 [Live Storybook](https://6346c29f12cb3212588eb719-kysdmcdpcq.chromatic.com/?path=/story/card01--regular)

```

function hasAdjacentNumbersWithDifferenceOne(inputString) {
  for (let i = 0; i < inputString.length - 1; i++) {
    const char1 = inputString[i];
    const char2 = inputString[i + 1];

    if (!isNaN(char1) && !isNaN(char2)) {
      const num1 = parseInt(char1);
      const num2 = parseInt(char2);

      if (Math.abs(num1 - num2) === 1) {
        return true;
      }
    }
  }

  return false;
}




```
