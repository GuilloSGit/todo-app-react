import { useState } from "react";
import Todo from "./todo";
import './todoApp.css';

export default function TodoApp() {

    const [getTitle, setTitle] = useState("");
    const [getTodos, setTodos] = useState([]);
    const [getCompletedNumber, setCompletedNumber] = useState(0);

    function handleChange(e) {
        const value = e.target.value;
        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (getTitle === "") return;
        const newTodo = {
            id: crypto.randomUUID(),
            title: getTitle,
            completed: false,
        };

        // setTodos([...getTodos, newTodo]); // This is the same as the code below

        const tempTodos = [...getTodos];
        tempTodos.unshift(newTodo);
        setTodos(tempTodos);
        setTitle("");
    }

    function countTodos() {
        return getTodos.length;
    }

    function handleUpdate(id, title) {
        const tempTodos = [...getTodos];
        const item = tempTodos.find((todo) => todo.id === id);
        item.title = title;
        setTodos(tempTodos);
    }

    function handleDelete(id) {
        const tempTodos = [...getTodos];
        const index = tempTodos.findIndex((todo) => todo.id === id);
        tempTodos.splice(index, 1);
        setTodos(tempTodos);
    }

    function countCompleted() {
        const countCompleted = getTodos.filter((todo) => todo.completed === false);
        return countCompleted.length;
    }

    return (
        <div className="todoContainer">
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input className="todoInput" type="text" placeholder="Agregue el título de la tarea" value={getTitle} onChange={handleChange} required />
                <input className="todoButton buttonCreate" type="submit" value="Crear Tarea" onClick={handleSubmit} />
            </form>

            <div className="todosItemsContainer">
                {
                    getTodos.length === 0 ?
                        <p className="noTodos">No hay tareas guardadas aún</p> :
                        getTodos.map((todo) => (
                            <div key={todo.id} className="todosItemsContainerIn">
                                <Todo todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} completed={todo.completed} />
                            </div>
                        ))
                }
                {
                    getTodos.length !== 0 ?
                        <div className="tasksCount">
                            <p><span>Total tareas: <span>{countTodos()}</span></span></p>
                            <p><span>Tareas pendientes:</span><span>{countCompleted()}</span></p>
                        </div>
                        : ""
                }

            </div>
        </div>
    );
}