
import React, { useState } from 'react';
import './inputform.css';
const InputForm = () => {


    return (
        <div className='input-form-container'>
            <p>Title: </p>
            <input type="text" value="title " />
            <p>Date: </p>
            <input type="text" value="date" />
        </div>         
    );
}

export default InputForm;