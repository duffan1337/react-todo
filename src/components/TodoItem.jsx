import React from "react";

function TodoItem({todo, handleToggle, removeTask}) {

    if (todo.description === '') {
        return (
            <div key={todo.id} className="todo__item">
    
                <div className={todo.complete ? "todo__item__text strike" : "todo__item__text"} onClick={() => handleToggle(todo.id)}>
    
                    <h3 className="todo__item__text__header">{todo.index}. {todo.title}</h3>
    
                </div>
    
                <div className="todo__item__buttons">
    
                    <i className='bx bx-trash' onClick={() => removeTask(todo.id)}></i>
    
                </div>
    
            </div>
        );
    }
    else {
        return (
        <div key={todo.id} className="todo__item">

            <div className={todo.complete ? "todo__item__text strike" : "todo__item__text"} onClick={() => handleToggle(todo.id)}>

                <h3 className="todo__item__text__header">{todo.index}. {todo.title}</h3>
                <p className="todo__item__text__parag">{todo.description}</p>

            </div>

            <div className="todo__item__buttons">

                <i className='bx bx-trash' onClick={() => removeTask(todo.id)}></i>

            </div>

        </div>
        );
    }
  }
  
  export default TodoItem;