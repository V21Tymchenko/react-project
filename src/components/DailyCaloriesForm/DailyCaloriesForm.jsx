import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useState } from 'react';

const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');

  const fields = {
    height: setHeight,
    desiredWeight: setDesiredWeight,
    age: setAge,
    bloodType: setBloodType,
    currentWeight: setCurrentWeight,
  };

  const handleInputChange = evt => {
    const { name } = evt.target;
    fields[name](prev => (prev = evt.target.value));
  };

  const formSubmit = evt => {
    evt.preventDefault();
    const calculateUserInfo = {
      weight: currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    };
    console.log(calculateUserInfo);
  };

  return (
    <form onSubmit={formSubmit}>
      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Height"
        variant="standard"
        name="height"
        value={height}
        required
      />
      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Desired weight"
        variant="standard"
        name="desiredWeight"
        value={desiredWeight}
        required
      />
      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Age"
        variant="standard"
        name="age"
        value={age}
        required
      />

      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Current weight"
        variant="standard"
        name="currentWeight"
        value={currentWeight}
        required
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Blood type</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="bloodType"
          value={bloodType}
          onChange={handleInputChange}
          label="Current weight"
          row
          required
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
      </FormControl>
      <button type="submit">Start losing weight</button>
    </form>
  );
};
export default DailyCaloriesForm;
