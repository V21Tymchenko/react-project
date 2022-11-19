import React, { useState } from 'react';
import debounce from 'lodash/debounce';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import s from 'components/DiaryAddProductForm/DiaryAddProductForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { eatenProduct } from 'redux/diary/diary-operations';
import { useMemo } from 'react';
import axios from 'axios';

export default function DiaryAddProductForm() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [productId, setProductId] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const { timeDay } = useSelector(state => state.diary);
  const dispatch = useDispatch();
  // const day = useSelector(state => state.diary.timeDay);

  const [products, setProducts] = useState([]);

  const fetchProducts = useMemo(
    () =>
      debounce(search => {
        if (!search) return;
        axios
          .get(`https://slimmom-backend.goit.global/product?search=${search}`)
          .then(({ data }) => setProducts(data))
          .catch(err => {
            console.log(err);
          })
          .finally(() => {});
      }, 300),
    []
  );

  //   axios.get(
  //     `https://slimmom-backend.goit.global/product?search=${product}`
  //   ).then((result) => {console.log('result :>> ', result);

  //   }).catch((err) => {

  //   }); ;
  //   return data;
  // }

  const handelChangeName = e => {
    setName(e.target.value);
    setIsOpen(true);
    fetchProducts(e.target.value.trim());
    // dispatch(searcheProducts(e.target.value.trim()));
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

  // const isTabletAndDesktop = useMediaQuery({
  //   query: '(min-width: 768px)',
  // });

  return (
    <div className={s.maxBox}>
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
        {products && name && isOpen && (
          <div className={s.menu}>
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

        {weight && name && (
          <Button
            type="submit"
            className={s.bt + ' ' + s.mybt}
            variant="contained"
            // disabled
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
        )}
      </Box>
    </div>
  );
}
