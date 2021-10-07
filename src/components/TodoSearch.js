import React from 'react';
import './styles/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
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