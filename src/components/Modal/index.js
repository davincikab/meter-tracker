import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({isModalOpen, closeModal, children}) => {

    return (
    <div className={isModalOpen ? 'modal-window' : 'modal-window d-none'}>
        <div className='modal-close-button' onClick={() => closeModal(true)}>
            CLOSE
            <FaTimes />
        </div>
        {children}
    </div>
    );
}


// title, children
export default Modal;