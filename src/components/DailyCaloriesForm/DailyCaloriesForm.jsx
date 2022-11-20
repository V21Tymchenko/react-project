import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import s from './DailyCaloriesForm.module.css';
import { orange } from '@mui/material/colors';
import PropTypes from 'prop-types';

const DailyCaloriesForm = ({ handlesetDataToApi }) => {
  // const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    weight: '',
    height: '',
    age: '',
    desiredWeight: '',
    bloodType: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  async function formSubmit(evt) {
    evt.preventDefault();
    const userData = {
      weight: Number(values.weight),
      height: Number(values.height),
      age: Number(values.age),
      desiredWeight: Number(values.desiredWeight),
      bloodType: Number(values.bloodType),
    };
    await handlesetDataToApi(userData);
    resetForm();
  }

  const resetForm = () => {
    setValues({
      weight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    });
  };

  return (
    <form className={s.form} onSubmit={formSubmit}>
      <TextField
        color="warning"
        className={s.input}
        onChange={handleChange}
        id="standard-basic"
        label="Height"
        variant="standard"
        name="height"
        type="number"
        value={values.height}
        required
      />
      <TextField
        color="warning"
        className={s.input}
        onChange={handleChange}
        id="standard-basic"
        label="Age"
        variant="standard"
        name="age"
        type="number"
        value={values.age}
        required
      />
      <TextField
        color="warning"
        className={s.input}
        onChange={handleChange}
        id="standard-basic"
        label="Current weight"
        variant="standard"
        name="weight"
        type="number"
        value={values.weight}
        required
      />
      <TextField
        color="warning"
        className={s.input}
        onChange={handleChange}
        id="standard-basic"
        label="Desired weight"
        variant="standard"
        name="desiredWeight"
        type="number"
        value={values.desiredWeight}
        required
      />

      <FormControl required>
        <FormLabel
          sx={{
            '&.Mui-focused': {
              color: orange[700],
            },
          }}
          id="demo-radio-buttons-group-label"
        >
          Blood type
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="bloodType"
          value={values.bloodType}
          onChange={handleChange}
          label="Current weight"
          row
          required
        >
          <FormControlLabel
            value="1"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: orange[700],
                  },
                }}
              />
            }
            label="1"
          />
          <FormControlLabel
            value="2"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: orange[700],
                  },
                }}
              />
            }
            label="2"
          />
          <FormControlLabel
            value="3"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: orange[700],
                  },
                }}
              />
            }
            label="3"
          />
          <FormControlLabel
            value="4"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: orange[700],
                  },
                }}
              />
            }
            label="4"
          />
        </RadioGroup>
      </FormControl>

      <button className={s.btn} type="submit">
        Start losing weight
      </button>
    </form>
  );
};
export default DailyCaloriesForm;

DailyCaloriesForm.propTypes ={
  setIsModalOpen: PropTypes.func,
  handlesetDataToApi: PropTypes.func,
}