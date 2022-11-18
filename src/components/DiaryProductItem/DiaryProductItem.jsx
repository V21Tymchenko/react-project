import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from 'components/DiaryProductItem/DiaryProductItem.module.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
];

export default function DiaryProductItem() {
  const isTabletAndDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <>
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
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.calories} <span>g</span>{' '}
                </TableCell>
                <TableCell align="right">
                  {row.fat} <span>kcal</span>{' '}
                </TableCell>
                <TableCell align="right">
                  {' '}
                  <button>x</button>{' '}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton> */}
      <div className={s.linkPlus}>
        {!isTabletAndDesktop && (
          <NavLink className={s.link} to="/login"></NavLink>
        )}
      </div>
    </>
  );
}
