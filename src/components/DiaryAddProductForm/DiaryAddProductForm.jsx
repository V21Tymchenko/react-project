import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from 'components/DiaryAddProductForm/DiaryAddProductForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { eatenProduct, seargeProducts } from 'redux/diary/diary-operations';

export default function DiaryAddProductForm() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const dispatch = useDispatch();
  const { timeDay } = useSelector(state => state.diary);

  const handelChangeName = e => {
    setName(e.target.value);
    dispatch(seargeProducts(e.target.value));
  };
  const handelChangeWeight = e => {
    setWeight(e.target.value);
  };
  const roductId = '5d51694802b2373622ff552c';
  const handelSubmit = e => {
    e.preventDefault();
    const data = { date: timeDay, roductId, weight };
    dispatch(eatenProduct(data));
  };
  return (
    <>
      <Box
        onSubmit={handelSubmit}
        className={s.form}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '240px' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={s.inName}
          type="text"
          value={name}
          name="name"
          onChange={handelChangeName}
          id="standard-basic"
          label="Enter product name"
          variant="standard"
        />
        <TextField
          className={s.inGrams}
          onChange={handelChangeWeight}
          value={weight}
          id="standard-basic"
          label="Grams"
          variant="standard"
        />
        <Button
          type="submit"
          className={s.bt + ' ' + s.mybt}
          variant="contained"
        >
          +
        </Button>
      </Box>
    </>
  );
}

//   <form className={s.addForm}>
//     <label>
//       <input
//         className={s.inName}
//         type="text"
//         value={name}
//         name="name"
//         onChange={handelChange}
//       />
//     </label>
//     <label>
//       <input type="number" className={s.inGrams} />
//     </label>
//     <button type="submit" className={s.bt}>
//       +
//     </button>
//   </form>;
