import React from 'react';

const Step = ({ number, content }) => {
    return (
        <div>
            <p>{number}. {content}</p>
        </div>
    );
};

export default Step;
