import React from "react";
import "./TodoCounter.css";
import logo1 from '../imagenes/logo2.png'
import { TodoContext } from "../TodoContext";



function TodoCounter () {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);
  return (
  <React.Fragment>
    <section className="section-title">
      <div className="div-img">
        <img src={ logo1 } alt= "Logo"/>
      </div>
      <div className="titles">
      <h1>CATA - TASK</h1>
      <h2>Haz completado {completedTodos} de {totalTodos} tareas</h2>
      </div>
    </section>
  </React.Fragment>
  );
};

export { TodoCounter };