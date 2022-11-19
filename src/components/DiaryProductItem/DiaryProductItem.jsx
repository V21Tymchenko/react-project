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
// import { useEffect } from 'react';
import { removeProduct } from 'redux/diary/diary-operations';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useMediaQuery } from 'react-responsive';

export default function DiaryProductItem({ setAddDairyProducts }) {
  const { eatenProducts } = useSelector(state => state.diary);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dayId = useSelector(state => state.diary.dayInform);
  const dispatch = useDispatch();
  // useEffect(() => {}, [eatenProducts]);

  const handlClick = eatenProductId => {
    dispatch(removeProduct({ dayId, eatenProductId }));
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
                {
                  <IconButton
                    type="button"
                    onClick={() => handlClick(row.id)}
                    aria-label="delete"
                    // color="primary"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                {/* <button type="button" onClick={() => handlClick(row.id)}>
                  x
                </button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isMobile && (
        <button className={s.add} onClick={() => setAddDairyProducts(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_1193)">
              <path
                d="M18.72 12.96H12.96V18.72H11.04V12.96H5.27997V11.04H11.04V5.28003H12.96V11.04H18.72V12.96Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_1193">
                <rect
                  width="23.04"
                  height="23.04"
                  fill="white"
                  transform="translate(0.47998 0.47998)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
    </TableContainer>
  );
}
