import React from 'react';
import './styles/TodoCounter.css'
import { TodoContext } from './TodoContext';

function TodoCounter() {
	const {totalTodos, completedTodos} = React.useContext(TodoContext)

	return (
		<div className="counter">
			<h2>
				Has completado {completedTodos} de {totalTodos} ToDos
			</h2>
		</div>
	);
}
export { TodoCounter };