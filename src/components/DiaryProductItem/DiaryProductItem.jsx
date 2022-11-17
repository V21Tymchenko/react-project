import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from 'components/DiaryProductItem/DiaryProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { removeProduct } from 'redux/diary/diary-operations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DiaryProductItem() {
  const { eatenProducts, id } = useSelector(state => state.diary.dayInform);
  const [dayId, setDayId] = useState('');
  const [eatenProductId, setEatenProductId] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {}, [eatenProducts]);

  const handlClick = e => {
    setDayId(e.target.name);
    setEatenProductId(e.target.id);
    const removeData = { dayId, eatenProductId };
    console.log('removeData :', removeData);
    dispatch(removeProduct(removeData));
  };

  return (
    <TableContainer className={s.tabl + ' ' + s.mytabl} component={Paper}>
      <Table sx={{ maxWidth: 623 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Gramm</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableHead>
        <TableBody>
          {eatenProducts?.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                {row.weight} <span>g</span>
              </TableCell>
              <TableCell align="right">
                {Math.round(row.kcal)} <span>kcal</span>
              </TableCell>
              <TableCell align="right">
                {' '}
                <IconButton
                  type="button"
                  name={id}
                  id={row.id}
                  onClick={handlClick}
                  aria-label="delete"
                  // color="primary"
                >
                  <DeleteIcon />
                </IconButton>
                {/* <button
                  type="button"
                  name={id}
                  id={row.id}
                  onClick={handlClick}
                >
                  x
                </button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
