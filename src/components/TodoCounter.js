import React from 'react';
import './styles/TodoCounter.css'

function TodoCounter({ total, completed }) {
	return (
		<div className="counter">
			<h2>
				Has completado {completed} de {total} ToDos
			</h2>
		</div>
	);
}
export { TodoCounter };