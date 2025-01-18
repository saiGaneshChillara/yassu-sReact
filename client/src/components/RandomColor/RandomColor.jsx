import React, { useEffect, useState } from 'react';

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const generateRandomNumber = (limit) => {
        return Math.floor(Math.random() * limit);
    };

    const generateHexColor = () => {
        const hexArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        let randomColor = "#";
        for (let i = 0; i < 6; i++) {
            randomColor += hexArr[generateRandomNumber(hexArr.length)];
        }
        setColor(randomColor);
    };

    const generateRgbColor = () => {
        const r = generateRandomNumber(256);
        const g = generateRandomNumber(256);
        const b = generateRandomNumber(256);

        const randomColor = `rgb(${r}, ${g}, ${b})`;
        setColor(randomColor);
    };

    useEffect(() => {
        if (typeOfColor === "rgb") generateRgbColor();
        else generateHexColor();
    }, [typeOfColor]);
    return (
        <div 
            className='random-color-container'
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: color
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB color</button>

            <button onClick={() => typeOfColor === "hex" ? generateHexColor() : generateRgbColor()}>
                Generate Random Color
            </button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontSize: "30px",
                    marginTop: "50px",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >
                <h3>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
};

export default RandomColor;
