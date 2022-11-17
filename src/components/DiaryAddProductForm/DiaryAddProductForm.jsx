import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from 'components/DiaryAddProductForm/DiaryAddProductForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  // dayInfo,
  eatenProduct,
  searcheProducts,
} from 'redux/diary/diary-operations';

export default function DiaryAddProductForm() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [productId, setProductId] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const { timeDay, products } = useSelector(state => state.diary);
  const dispatch = useDispatch();
  // const day = useSelector(state => state.diary.timeDay);
  const handelChangeName = e => {
    setName(e.target.value);
    setIsOpen(true);
    dispatch(searcheProducts(e.target.value.trim()));
  };
  const handelChangeWeight = e => {
    setWeight(e.target.value);
  };
  const handlClik = e => {
    setName(e.target.name);
    setProductId(e.target.id);
    setIsOpen(false);
  };
  const handelSubmit = e => {
    e.preventDefault();
    const data = { date: timeDay, productId, weight };
    dispatch(eatenProduct(data));
    // dispatch(dayInfo({ date: day }));
    setName('');
    setWeight('');
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
        {products && isOpen && (
          <div>
            {products.map(e => (
              <button
                type="button"
                name={e.title.ru}
                key={e._id}
                id={e._id}
                onClick={handlClik}
              >
                {e.title.ru}
              </button>
            ))}
          </div>
        )}
        <TextField
          className={s.inGrams}
          type="number"
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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.72 12.96H12.96V18.72H11.04V12.96H5.28003V11.04H11.04V5.28003H12.96V11.04H18.72V12.96Z"
              fill="white"
            />
          </svg>
        </Button>
      </Box>
    </>
  );
}
