import React, { useState } from "react";

function TodoForm( {addTask} ) {

    const [titleInput, setTitleInput] = useState("");
    const [descInput, setDescInput] = useState("");

    function titleHandleChange(e) {
        setTitleInput(e.currentTarget.value)
    }

    function descHandleChange(e) {
        setDescInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTask(titleInput, descInput)
        setTitleInput("");
        setDescInput("");
    }

    function onKeyDown(e) {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                className="title-input"
                type="text"
                value={titleInput}
                onChange={titleHandleChange}
                onKeyDown={onKeyDown}
                placeholder="Task name"
            />
            <input
                type="text"
                value={descInput}
                onChange={descHandleChange}
                onKeyDown={onKeyDown}
                placeholder="Task description (optional)"
            />
            <button>Add</button>

        </form>
    );
  }
  
  export default TodoForm;