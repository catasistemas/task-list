import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
import "./App.css";

const todos = [
  { text: "Cortar Cebolla", complete: false},
  { text: "Comprar Cambures", complete: false},
  { text: "Traer el agua", complete: false},
  { text: "Bañar a los perros", complete: false},
]



function App (props) {
  return(
    <React.Fragment>
    <main className="main">
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem key = {todo.text} text= {todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton/>
    </main>
    </React.Fragment>
    );
}

export default App;
