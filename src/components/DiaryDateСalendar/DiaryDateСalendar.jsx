import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { timeSet } from 'redux/diary/diary-slice';
import { dayInfo } from 'redux/diary/diary-operations';
import s from 'components/DiaryDateСalendar/DiaryDateСalendar.module.css';
import { stateAuthToken } from 'redux/auth/auth-selectors';

export default function DiaryDateСalendar() {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const token = useSelector(stateAuthToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(timeSet(value.format('YYYY-MM-DD')));
    dispatch(dayInfo({ date: value.format('YYYY-MM-DD') }));
  }, [dispatch, value, token]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <DesktopDatePicker
          className={s.calendar + ' ' + s.mycalendar}
          value={value}
          minDate={dayjs('2017-01-01')}
          onChange={newValue => {
            setValue(newValue);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
