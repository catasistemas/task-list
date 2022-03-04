import React from "react";
import './CreateTodoButton.css'


function CreateTodoButton () {

  const onClickButton = (msg) => {
    alert(msg);
  };

  return(
    <button
    className="button"
    onClick={() => onClickButton('Aqui va el modal')}
    type="button"
    > + </button>
  );
};

export {CreateTodoButton};