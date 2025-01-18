import React from 'react';

const Suggestions = ({ data, handleClick }) => {
    return (
        <ul>
            {
                data && data.length ? 
                    data.map((dataItem, index) => 
                        <li onClick={handleClick} key={index}>
                            {dataItem}
                        </li>
                    ) : null
            }
        </ul>
    );
};

export default Suggestions;
