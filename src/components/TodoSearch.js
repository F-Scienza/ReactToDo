import React from 'react';
import './styles/TodoSearch.css'
import { TodoContext } from './TodoContext';

function TodoSearch() {
	const { searchValue, setSearchValue } = React.useContext(TodoContext)

	const onsSearchValueChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<input
			placeholder="Search ToDo"
			className="todoSearch"
			value={searchValue}
			onChange={onsSearchValueChange}
		/>
	);
}

export { TodoSearch }