import React from 'react';
import './styles/TodoForm.css'
import {TodoContext} from './TodoContext/index.js'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState(' ')
    const {
        addTodo,
        setOpenModal
    }   = React.useContext(TodoContext)
    
    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    
    return (  
        <form onSubmit={onSubmit}>
            <label>
                Escribe tu nuevo to do
            </label>
            <textarea
                placeholder="..."
                value={newTodoValue}
                onChange={onChange}
            >
            </textarea>
            <div className="btn-container">
                <button
                    className="btn-modal add"
                    type="submit"
                    onClick={onSubmit}
                >
                    Agregar
                </button>
            </div>
        </form>
    );
}

export {TodoForm};