import React from "react";
import { TodoContext } from "../TodoContext";
import "./todoForm.css";
function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const onKeyUp = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      if(newTodoValue.length <= 0){
        alert('No esta permitido agregar tareas vacias')
      }else {
        addTodo(newTodoValue);
        onCancel();
      }
    }
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(newTodoValue.length <= 0){
      alert('No esta permitido agregar tareas vacias')
    }else {
      addTodo(newTodoValue);
      setOpenModal(false);
    };
  };

  return (
    <form
      onSubmit={onSubmit}
      onKeyPress={onKeyUp}
      >
      <label>Escribe una nueva Tarea </label>
      <textarea
      value={newTodoValue}
      onChange= {onChange}
      placeholder= "Cortar la cebolla para el almuerzo">

      </textarea>
      <div className="TodoForm-buttonContainer">
        <button
        type="button"
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}
        >
          Cancelar
        </button>
        <button
        type="submit"
        className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };