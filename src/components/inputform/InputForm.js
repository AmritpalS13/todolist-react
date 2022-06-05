
import React, { useState } from 'react';
import './inputform.css';
const InputForm = ({ addItem }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    return (
        <div className='input-form-container'>
            <p>Title: </p>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <p>Date: </p>
            <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
            <button className='btn' onClick={() => addItem(title, date)}>Add Item</button>
        </div>         
    );
}

export default InputForm;