# storybook_01

🚀 [Live Storybook](https://6346c29f12cb3212588eb719-kysdmcdpcq.chromatic.com/?path=/story/card01--regular)

Git: [https://github.com/DavidMarom/storybook_01](https://github.com/DavidMarom/storybook_01)

```
import * as React from 'react';
import {
  NumericTextBox,
  Checkbox,
  DatePicker,
} from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';

const MyForm: React.FC = () => {
  const [numberValue, setNumberValue] = React.useState<number | null>(null);
  const [checkboxValues, setCheckboxValues] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleNumberChange = (event: any) => {
    setNumberValue(event.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleDateChange = (event: any) => {
    setSelectedDate(event.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Number Value:', numberValue);
    console.log('Checkbox Values:', checkboxValues);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div>
      <label>Number:</label>
      <NumericTextBox
        value={numberValue}
        onChange={handleNumberChange}
      />

      <div>
        <label>Checkboxes:</label>
        <Checkbox
          label="Checkbox 1"
          name="checkbox1"
          checked={checkboxValues.checkbox1}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Checkbox 2"
          name="checkbox2"
          checked={checkboxValues.checkbox2}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Checkbox 3"
          name="checkbox3"
          checked={checkboxValues.checkbox3}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Checkbox 4"
          name="checkbox4"
          checked={checkboxValues.checkbox4}
          onChange={handleCheckboxChange}
        />
      </div>

      <div>
        <label>Date:</label>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default MyForm;
```js
