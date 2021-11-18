import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Calender = ({startDate, setStartDate}) => {
    return (
        <div className="d-flex justify-content-center">
               <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
        </div>
     
    );
};

export default Calender;