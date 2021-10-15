import React, { useState }  from 'react';
import './styles/CreateToDoButton.css';
function CreateToDoButton(props) {
    const [isActive, setIsActive] = useState(false)

    let buttonClass = isActive
			? (' Btn-Cancel')
			: (' Btn-Add');;
    const createTodoBtn = () =>{
        props.setOpenModal(prevState => !prevState)
        setIsActive(!isActive)
    }
    return (
			<button 
            className={`CreateTodoBtn ${buttonClass}`}
            onClick={createTodoBtn}
            >
				+
			</button>
		);
}

export { CreateToDoButton };