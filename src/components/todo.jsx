import { useState } from 'react';
export default function Todo({ todo, onUpdate, onDelete }) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {

        const [newValue, setNewValue] = useState(todo.title);

        function handleSubmit(e) {
            e.preventDefault();
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }

        function handleClickUpdateTodoDo() {
            onUpdate(todo.id, newValue, todo.completed);
            setIsEdit(false);
        }

        return (
            <div className='todoEdit'>
                <form onSubmit={handleSubmit}>
                    <fieldset className='todoUpdateForm' >
                        <legend>Editar tarea</legend>
                        <input type='text' className='todoEditInput' onChange={handleChange} value={newValue} />
                        <button className='todoButton buttonUpdate' onClick={handleClickUpdateTodoDo} type="button">Guardar</button>
                    </fieldset>
                </form>
            </div>
        );
    }

    function TodoElement() {

        const [completed, setCompleted] = useState(todo.completed);

        function handleChangeRetake(e) {
            e.preventDefault();
            setCompleted(todo.completed = false);
        }

        function handleChangeDone(e) {
            e.preventDefault();
            setCompleted(todo.completed = true);
        }

        return (
            <div className='todoInfo'>
                <div className='todoTitleSection'>
                    <span className='todoItemTitle'>{todo.title}</span>
                    {completed ? <span className='finishedItem'>✅ Terminado</span> : <span className='unfinisheItem'>📌 Pendiente</span>}
                </div>
                <div className='todoButtonsSection'>
                    <div className="editionButtons">
                        <button onClick={() => setIsEdit(true)} className="todoButton edit" type="button">Editar</button>
                        <button onClick={(e) => onDelete(todo.id)} className="todoButton delete" type="button">Eliminar</button>
                    </div>
                    <div className='todoCheckboxSection'>
                        {completed ?
                            <button onClick={handleChangeRetake} className="todoButton markRetake" type="button">Retomar</button>
                            : <button onClick={handleChangeDone} className="todoButton markDone" type="button">Marcar</button>
                        }
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='todo'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    );
}