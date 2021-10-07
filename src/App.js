import { TodoCounter } from './components/TodoCounter';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoSearch } from './components/TodoSearch';
import { CreateToDoButton } from './components/CreateToDoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Estudiar react', completed: false },
  { text: 'Estudiar css', completed: true },
  { text: 'Estudiar javascrpt', completed: false },
  { text: 'Buscar empleo', completed: false }
]

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(defaultTodos);
  
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []
  
  if (!searchValue.length >= 1){ 
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    })
  }


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }
  const deleteTodo = text => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};  


  return (
		<React.Fragment>
			<TodoCounter total={totalTodos} completed={completedTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
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
			<CreateToDoButton />
		</React.Fragment>
	);
}

export default App;
