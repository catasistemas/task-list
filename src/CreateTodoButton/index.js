import React from "react";
import './CreateTodoButton.css'


function CreateTodoButton (props) {

  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return(
    <button
    className="button"
    onClick={onClickButton}
    type="button"
    > + </button>
  );
};

export {CreateTodoButton};