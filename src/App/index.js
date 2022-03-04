import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import "./App.css";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: false},
  { text: "Comprar Cambures", completed: false},
  { text: "Traer el agua", completed: false},
  { text: "Bañar a los perros", completed: true},
  { text: "Participar en la entrevista", completed: false},
  { text: "Extraer oro", completed: false},
  { text: "Limpiar la cocina", completed: true}
]



function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos);

  }


  return(
    <React.Fragment>
    <main className="main">
      <TodoCounter
        totalTodos = {totalTodos}
        completedTodos = {completedTodos}
      />
      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
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
    </React.Fragment>
    );
}

export default App;
