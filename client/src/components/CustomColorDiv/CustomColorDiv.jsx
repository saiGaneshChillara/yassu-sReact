import React, { useState } from 'react';
import InputField from './InputField';
import './styles.css';

const CustomColorDiv = () => {
    const [color, setColor] = useState(null);
    
    const changeColor = (newColor) => {
        setColor(newColor);
    };

    return (
        <>
            <div className="custom-color" style={{
                "backgroundColor": `${color}`
            }}>
            </div>
            <InputField value={color} onChangeHandler={changeColor} />
        </>
    );
};

export default CustomColorDiv;