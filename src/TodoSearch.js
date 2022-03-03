import React from "react";
import './TodoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


function TodoSearch () {
  return (
    <div className="div-input">
      <input placeholder="Buscar..." />
      <span className="icon-search">
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </span>
    </div>
  );
};

export { TodoSearch };