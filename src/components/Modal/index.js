import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = (props) => {
    return (
    <div className='modal-window'>
        <div className='modal-header'>
            <div className='modal-title'>
              Site Name
            </div>

            <div className='close-button'>
              <FaTimes />
            </div>
        </div>

        <div className='modal-body'>
          <div>Modal Window</div>
          {props.children}
        </div>
    </div>
    );
}


export default Modal;