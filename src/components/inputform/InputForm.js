
import React, { useState } from 'react';
import './inputform.css';
const InputForm = () => {

    //Simple input
    const [value, setValue] = useState('');

    //TextArea input,
    const [area, setArea] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleAreaChange = (event) => {
        setArea(event.target.value);
    }
    const handleAreaSubmit = (event) => {
        alert("Essay : ", area);
        event.preventDefault();
    }
    const handleSubmit = (event) => {
        alert("A name was wubmitted: " + value);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleAreaSubmit}>
            <label>
                Name:
                <input type="text" value={value} onChange={handleChange}/>
            </label>
            <input type="submit" value="submit" />
            
        </form>
    );
}

export default InputForm;