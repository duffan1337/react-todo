import { computeHeadingLevel } from '@testing-library/dom';
import React, { useState } from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';

import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import './styles/App.css';

function App() {

	let [todos, setTodos] = useState([]);

	function addTask(titleInput, descInput) {
		if (titleInput) {
			if (document.querySelector('.title-input').classList.contains('error')) {
				document.querySelector('.title-input').classList.remove('error');
			};
			let newItem = {
				id: Date.now(),
				title: titleInput,
				description: descInput,
				complete: false,
				index: todos.length + 1
			}

			setTodos([...todos, newItem]);
		}
		else {
			document.querySelector('.title-input').classList.add('error');
		}
	}

	function removeTask(id) {
		setTodos([...todos.filter((todo) => todo.id !== id).filter((todo) => todo.length > 1 ? todo.index : todo.index--)])
	}

	function handleToggle(id) {
		setTodos([
			...todos.map((todo) =>
			todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
			)
		])
	}

  return (
    <div className="App">

		<h1>Todo List</h1>

		<TodoForm addTask={addTask}/>

		{todos.map((todo) => {
			return (
				<TodoItem
					todo={todo}
					key={todo.id}
					handleToggle={handleToggle}
					removeTask={removeTask}
				/>
			);
		})}

    </div>
  );
}

export default App;
