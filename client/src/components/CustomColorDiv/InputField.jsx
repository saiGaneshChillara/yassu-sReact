import React from 'react';

const InputField = ({ value, onChangeHandler }) => {
    const handleChange = (e) => {
        let val = e.target.value;
        onChangeHandler(val);
    }
    return (
        <input 
            type='text' 
            placeholder='Enter Color to change the color of the div' 
            value={value} 
            onChange={handleChange} 
        />
    );
};

export default InputField;
