import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from 'components/DiaryAddProductForm/DiaryAddProductForm.module.css';

export default function DiaryAddProductForm() {
  const [name, setName] = useState('');
  const handelChange = e => {
    setName(e.target.value);
  };
  return (
    <>
      <Box
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
          onChange={handelChange}
          id="standard-basic"
          label="Enter product name"
          variant="standard"
        />
        <TextField
          className={s.inGrams}
          id="standard-basic"
          label="Grams"
          variant="standard"
        />
        <Button className={s.bt + ' ' + s.mybt} variant="contained">
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
