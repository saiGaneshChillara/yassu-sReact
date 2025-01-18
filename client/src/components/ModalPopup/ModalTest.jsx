import React, { useState } from 'react';
import Modal from './Modal';
import "./styles.css";

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const toggleModalPopup = () => {
        setShowModalPopup(!showModalPopup);
    };
    const onClose = () => {
        setShowModalPopup(false);
    };

    return (
        <div className='btn-container'>
            <button onClick={toggleModalPopup}>Open Modal</button>
            {
                showModalPopup && <Modal onClose={onClose} />
            }
        </div>
    );
};

export default ModalTest;
