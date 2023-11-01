"use client"

import { useState } from 'react';
import IconeMenu from '../../../assets/iconemenu.svg'
import './DropDown.style.css'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-img" onClick={toggleDropdown}>
        <img src={IconeMenu} alt="IconeMenu"/>
      </button>
      {isOpen && (
           <ul className="dropdown-menu">
            <li>Ajuda</li>
            <li>Organograma</li>
            <li>Central Solucoes</li>
            <li>Reportar Problema</li>
            <li>Revisoes Breves</li>
            <li>Acionamento Sinistro</li>
          </ul>
       
      )}
    </div>
  );
};

export default Dropdown;