import React from "react";
import "./TodoCounter.css";
import logo1 from './imagenes/logo2.png'



function TodoCounter () {
  return (
  <React.Fragment>
    <section className="section-title">
      <div className="div-img">
        <img src={ logo1 } alt= "Logo"/>
      </div>
      <div className="titles">
      <h1>CATA - TASK</h1>
      <h2>Haz completado 2 de 3 tareas</h2>
      </div>
    </section>
  </React.Fragment>
  );
};

export { TodoCounter };