import React from "react";
import './TodoItem.css'


function TodoItem (props) {
  return (
    <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`} onClick={props.onComplete}>
        C
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span className="icon icon-delete"
      onClick={props.onDelete}>
        X
      </span>
    </li>
  );
};

export { TodoItem };