import React from "react";
import './TodoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


function TodoSearch ({ searchValue, setSearchValue }) {


  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className="div-input">
      <input
        placeholder="Buscar..."
        value = {searchValue}
        onChange={onSearchValueChange}
        />
      <span className="icon-search">
      <FontAwesomeIcon icon={faMagnifyingGlass}/>
      </span>
    </div>
  );
};

export { TodoSearch };