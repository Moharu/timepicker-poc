import React, { Component, useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";


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
    <TimePicker
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
      </div>
    );
  }
}

export default App;
