import React from 'react';
import { TodoContext } from './components/TodoContext/index.js'
import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { CreateToDoButton } from './components/CreateToDoButton';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm.js';
import { TodoNav } from './components/TodoNav.js';


function AppUI() {
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

    return (
			<React.Fragment>
				<TodoCounter />
				<TodoSearch />
				<TodoNav />
				<TodoList>
					{error && <p> hubo un error</p>}
					{loading && <li>estamos cargando</li>}
					{!loading && !searchedTodos.length && <p>crea tu primer todo</p>}

					{searchedTodos.map(todo => (
						<TodoItem
							key={todo.text}
							text={todo.text}
							completed={todo.completed}
							onComplete={() => completeTodo(todo.text)}
							onDelete={() => deleteTodo(todo.text)}
						/>
					))}
				</TodoList>
				{!!openModal && (
					<Modal>
						<TodoForm />
					</Modal>
				)}
				<CreateToDoButton setOpenModal={setOpenModal} />
			</React.Fragment>
		);
}

export {AppUI};




