import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext"



function AppUI () {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo} = React.useContext(TodoContext);

  return(<React.Fragment>
    <main className="main">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>hubo un error</p>}
        {loading && <p>Estammos cargando, no desespere</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer To DO</p>}
        {searchedTodos.map(todo => (
          <TodoItem
          key = {todo.text}
          completed = {todo.completed}
          text = {todo.text}
          onComplete = {() => completeTodo(todo.text)}
          onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton/>
    </main>
    </React.Fragment>);
};


export { AppUI };