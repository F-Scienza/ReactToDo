import React, { useState } from 'react';
import { TodoContext } from './TodoContext/index.js';
import './styles/CreateToDoButton.css';
function CreateToDoButton(props) {
	const { openModal, setOpenModal } = React.useContext(TodoContext);

    const handleSetOpenModal = ()=>{
        setOpenModal(!openModal)
    }

	let buttonClass = openModal ? ' Btn-Cancel' : ' Btn-Add';
	return (
		<button className={`CreateTodoBtn ${buttonClass}`} onClick={handleSetOpenModal} >
			+
		</button>
	);
}

export { CreateToDoButton };
