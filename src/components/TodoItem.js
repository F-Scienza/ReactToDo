import React from 'react';
import './styles/TodoItem.css'

function TodoItem(props) {
    return (
			<li className={`${props.completed && 'li-completed'}`}>
				<p className={`TodoItem-p ${props.completed && 'TodoItem-p-complete'}`}>
					{props.text}
				</p>
				<span className="Icon Icon-Delete" onClick={props.onDelete}>
					X
				</span>
				<span
					className={`Icon Icon-Check ${
						props.completed && 'Icon-Check-completed'
					}`}
					onClick={props.onComplete}
				>
					√
				</span>
			</li>
		);
}

export { TodoItem };