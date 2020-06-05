import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePickerr from 'react-time-picker';
import DateTimePicker from 'react-datetime-picker';
import Picker from 'react-mobile-picker';
import { TimePicker } from 'antd';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import 'antd/dist/antd.css'


const PickerOne = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
    />
  );
}

const PickerTwo = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <TimePickerr
      onChange={setStartDate}
      value={startDate}
      format={"h:m a"}
      clockIcon={null}
    />
  );
}

const PickerThree = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DateTimePicker 
      onChange={setStartDate}
      value={startDate}
    />
  )
}

function generateNumberArray(begin, end) {
  let array = [];
  for (let i = begin; i <= end; i++) {
    array.push((i < 10 ? '0' : '') + i);
  }
  return array;
}

const PickerFour = () => {
  const [startDate, setStartDate] = useState(moment());
  return (
    <TimePicker
      onChange={setStartDate}
      value={startDate}
      format={'h:m a'}
    />
  );

}

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px'}}>
        <div>
          <h2>Timepicker demo</h2>
        </div>
        <p>All styles can be customized, including the clocks/modals for each individual picker</p>
        <p>
          Time picker with multiple time intervals (that can be configured) "react-datepicker"
          <p style={{ paddingLeft: '15px'}}>
            <PickerOne />
          </p>
        </p>
        <p>
          Time input with clock display "react-time-picker"
          <p style={{ paddingLeft: '15px'}}>
            <PickerTwo />
          </p>
        </p>
        <p>
          Date and time input "react-datetime-picker"
          <p style={{ paddingLeft: '15px'}}>
            <PickerThree />
          </p>
        </p>
        <p>
          <PickerFour /> 
        </p>
      </div>
    );
  }
}

export default App;
