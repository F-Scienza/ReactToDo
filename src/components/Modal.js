import React from 'react';
import reactDom from 'react-dom';
import './styles/Modal.css'

function Modal({children}) {
    return reactDom.createPortal(
        <div className="Modal-Background">
            <div className="Modal-Container">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }; 