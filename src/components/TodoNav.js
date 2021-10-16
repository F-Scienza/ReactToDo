import React from 'react';
import './styles/TodoNav.css'
import { TodoContext } from './TodoContext';

function TodoNav() {
    const { navTodosChecked,setNavTodosChecked } =
			React.useContext(TodoContext);
    
    const [liText, setLiText] = React.useState('ToDos por completar');
    const [navStyle, setNavStyle] = React.useState('Nav-Todo-Uncompleted');
    
    const sectionTodos = () =>{
        setNavTodosChecked(!navTodosChecked);
        !navTodosChecked
            ?(setLiText(' ToDos por completar' ,setNavStyle('Nav-Todo-Uncompleted')))
            :(setLiText('¡ToDos completados!' ,setNavStyle('Nav-Todo-Completed')))
    }
    return (
			<nav className="Nav-Todo">
				<ul className="Nav-Todo-ul">
					<li
                    onClick={sectionTodos}
                    className={`Nav-Todo-li ${navStyle}`}
                    >
                        <p> { liText } </p>
                    </li>
				</ul>
			</nav>
		);
}

export {TodoNav};