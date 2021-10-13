import React from 'react';
import './styles/CreateToDoButton.css'

function CreateToDoButton(props) {
    
    const createTodoBtn = () =>{
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button 
        className="CreateToDoBtn"
        onClick= {createTodoBtn}
        >
            +
        </button>
    );
}

export { CreateToDoButton };