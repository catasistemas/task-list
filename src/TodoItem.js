import React from "react";
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckDouble, faTrash} from '@fortawesome/free-solid-svg-icons';


function TodoItem (props) {
  return (
    <li className={`TodoItem ${props.completed && 'TodoItem--completed'}`}>
      <span className={`icon icon-check ${props.completed && 'icon-check--active'}`} onClick={props.onComplete}>
        <FontAwesomeIcon icon={faCheckDouble}/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span className="icon icon-delete"
      onClick={props.onDelete}>
        <FontAwesomeIcon icon={faTrash}/>
      </span>
    </li>
  );
};

export { TodoItem };