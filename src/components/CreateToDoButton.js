import React from 'react';
import './styles/CreateToDoButton.css'

function CreateToDoButton() {
    const createTodoBtn = () =>{
        alert('crear todo')
    }
    return (
        <button 
        onClick= {createTodoBtn}
        className="CreateToDoBtn"
        >
            +
        </button>
    );
}

export { CreateToDoButton };