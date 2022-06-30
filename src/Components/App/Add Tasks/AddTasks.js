import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AddTasks = () => {
 const [date, setDate] = useState(new Date())
 return (
  <div className="add-task grid lg:grid-cols-2">
   <div className="task-date">
    <DayPicker
     mode='single'
     selected={date}
     onSelect={setDate}
    />
   </div>
   <div className="task">

   </div>
  </div>
 );
};

export default AddTasks;