import React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import s from 'components/DiaryDateСalendar/DiaryDateСalendar.module.css';

export default function DiaryDateСalendar() {
  const [value, setValue] = React.useState(dayjs('2022-11-15'));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={1}>
        <DesktopDatePicker
          className={s.calendar + ' ' + s.mycalendar}
          label="Data"
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
