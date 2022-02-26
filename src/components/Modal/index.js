import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = (props) => {
    return (
    <div className='modal-window'>
        <div className='modal-header'>
            <div className='modal-title'>
              DETECTED ACTIVITY
            </div>

            <div className='modal-header-count'>
                Number of sites:
                <div className='text-count'>
                  <h5>40</h5>
                </div>
            </div>

            <div className='modal-close-button'>
              CLOSE
              <FaTimes />
            </div>
        </div>

        <div className='modal-body'>
            {props.children}
            <table className='table'>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Site Name</th>
                  <th>District Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>PJ0001</td>
                  <td>Petaling Jaya</td>
                  <td>Door open today at 12:08PM</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>PJ0002</td>
                  <td>Sha Alam</td>
                  <td>Door open today at 12:08PM</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
    );
}


export default Modal;