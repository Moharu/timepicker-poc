import React, { Component, useState } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import 'antd/dist/antd.css'

const Picker = () => {
  const [startDate, setStartDate] = useState(moment().startOf('day'));
  return (
    <TimePicker
      onChange={setStartDate}
      value={startDate}
      format={'h:mm a'}
      inputReadOnly
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
          Similar to the iOS time picker "TimePicker from antd"
          <style> {`
            .ant-picker-time-panel-column {
              overflow-y: scroll;
            }
          `}
          </style>
          <p style={{ paddingLeft: '15px'}}>
            <Picker /> 
          </p>
        </p>
      </div>
    );
  }
}

export default App;
