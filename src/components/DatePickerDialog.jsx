import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../DatePickerDialog.module.css';

const DatePickerDialog = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.datePickerContainer}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className={styles.customDatePicker}
      />
    </div>
  );
};

export default DatePickerDialog;
