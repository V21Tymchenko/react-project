import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { getPublicData } from 'services/backApi';
import { useDispatch, useSelector } from 'react-redux';
import { dailyRateOperation } from 'redux/dailyRate/dailyRate-operations';

const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [desiredWeight, setDesiredWeight] = useState('');
  const [age, setAge] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  // const [userInfo, setUserInfo] = useState('');
  const dispatch = useDispatch();
  const isLogined = useSelector(state => state.auth.isLoggedIn);

  const fields = {
    height: setHeight,
    desiredWeight: setDesiredWeight,
    age: setAge,
    bloodType: setBloodType,
    currentWeight: setCurrentWeight,
  };

  const handleInputChange = evt => {
    const { name } = evt.target;
    fields[name](prev => (prev = Number(evt.target.value)));
  };
  // const takeUserData = async value => {
  //   await getPublicData(value).then(setUserInfo);
  // };

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
    getPublicData(calculateUserInfo);

    localStorage.setItem(
      'calculateUserInfo',
      JSON.stringify(calculateUserInfo)
    );
    if (!isLogined) {
      dispatch(dailyRateOperation(calculateUserInfo));
    } else {
      console.log(111111111111);
    }
    resetForm();
  };

  const resetForm = () => {
    setHeight('');
    setDesiredWeight('');
    setAge('');
    setBloodType('');
    setCurrentWeight('');
  };

  return (
    <form onSubmit={formSubmit}>
      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Height"
        variant="standard"
        name="height"
        type="number"
        value={height}
        required
      />
      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Desired weight"
        variant="standard"
        name="desiredWeight"
        type="number"
        value={desiredWeight}
        required
      />
      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Age"
        variant="standard"
        name="age"
        type="number"
        value={age}
        required
      />

      <TextField
        onChange={handleInputChange}
        id="standard-basic"
        label="Current weight"
        variant="standard"
        name="currentWeight"
        type="number"
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
