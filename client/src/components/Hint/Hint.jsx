import React from 'react';
import Step from './Step';
import { useParams } from 'react-router-dom';
import steps from '../../lib/steps';

const Hint = () => {
    const { component } = useParams();
    console.log("Hint component called");
    console.log("params is", component);
    const currentSteps = steps[component];
    console.log("current steps is", currentSteps);
    return (
        <div style={{width: "500px", height: "500px", backgroundColor:'gold'}}>
            {
                currentSteps.map((step, index) => <Step number={index + 1} content={step} />)
            }
        </div>
    );
};

export default Hint;
