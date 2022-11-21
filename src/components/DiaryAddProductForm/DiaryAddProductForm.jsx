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
import { useMediaQuery } from 'react-responsive';
import { grey, orange } from '@mui/material/colors';
import { toast, ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';

export default function DiaryAddProductForm({ setAddDairyProducts }) {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [productId, setProductId] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const { timeDay } = useSelector(state => state.diary);
  const dispatch = useDispatch();

  // const day = useSelector(state => state.diary.timeDay);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const [products, setProducts] = useState([]);
  const notifySuccess = message => toast.error(message);
  const fetchProducts = useMemo(
    () =>
      debounce(search => {
        if (!search) return;
        axios
          .get(`https://slimmom-backend.goit.global/product?search=${search}`)
          .then(({ data }) => setProducts(data))
          .catch(err => {
            notifySuccess(err.response.data.message);
          })
          .finally(() => {});
      }, 300),
    []
  );

  const handelChangeName = e => {
    setName(e.target.value);
    setIsOpen(true);
    fetchProducts(e.target.value.trim());
    if (!name) return setProducts([]);
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
    <div className={s.fixesBox}>
      <div className={s.maxBox}>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {isMobile && (
          <button className={s.exit} onClick={() => setAddDairyProducts(false)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_1348)">
                <path d="M6 6L18 18" stroke="#212121" strokeWidth="2" />
                <path d="M6 18L18 6" stroke="#212121" strokeWidth="2" />
              </g>
              <defs>
                <clipPath id="clip0_6_1348">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        )}
        <Box
          onSubmit={handelSubmit}
          className={s.form}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '240px' },
          }}
          noValidate
          autoComplete="off"
        />
        <TextField
          className={s.inName + '' + s.input + '' + s.in}
          type="text"
          value={name}
          name="name"
          onChange={handelChangeName}
          id="standard-basic"
          label="Enter product name"
          variant="standard"
          color="warning"
          sx={{
            '& #standard-basic-label': {
              color: grey[500],
              fontFamily: 'Arimo',
              fontWeight: 700,
            },
            '& #standard-basic-label.Mui-focused': {
              color: orange[700],
            },
          }}
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
          className={s.inGrams + '' + s.myInGrams}
          type="number"
          onChange={handelChangeWeight}
          value={weight}
          id="standard-basic"
          label="Grams"
          variant="standard"
          color="warning"
          width="800"
          sx={{
            '& #standard-basic.MuiInputBase-input MuiInput-input css-1x51dt5-MuiInputBase-input-MuiInput-input':
              {
                width: 7,
              },
            '& #standard-basic-label': {
              color: grey[500],
              fontFamily: 'Arimo',
              fontWeight: 700,
            },
            '& #standard-basic-label.Mui-focused': {
              color: orange[700],
            },
          }}
        />
        {isTablet && (
          <Button
            type="submit"
            className={s.bt + ' ' + s.mybt}
            variant="contained"
            disabled={!weight || !name}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_1348)">
                <path d="M6 6L18 18" stroke="#212121" strokeWidth="2" />
                <path d="M6 18L18 6" stroke="#212121" strokeWidth="2" />
              </g>
              <defs>
                <clipPath id="clip0_6_1348">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        )}
        {isMobile && (
          <div className={s.btnContainer + ' ' + s.container}>
            <Button
              type="submit"
              className={s.btn + ' ' + s.buttonAdd}
              variant="contained"
              disabled={!weight}
            >
              Add
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

DiaryAddProductForm.propTypes = {
  setAddDairyProducts: PropTypes.func,
};
