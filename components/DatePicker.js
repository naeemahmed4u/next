import { ErrorMessage, useField } from 'formik';
import React, {useState} from 'react'; 
import DP from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";


export default function DatePicker({label, ...props}){
    const [startDate, setStartDate] = useState(new Date());
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <br/>
            <DP 
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
               selected={startDate}onChange={(date)=>setStartDate(date)}/>
                
            
            <ErrorMessage component="div" name={field.name} className='error'/>
        </div>
    );
};
