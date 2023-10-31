import { Link } from 'react-router-dom';
import { useState } from 'react';
import IconeMenu from '../../assets/iconemenu.svg'
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
            <li><Link to="../../pages/Ajuda">Ajuda</Link></li>
            <li><Link to="../../pages/Organograma">Organograma</Link></li>
            <li><Link to="../../pages/CentralSolucoes">Central Solucoes</Link></li>
            <li><Link to="../../pages/ReportarProblema">Reportar Problema</Link></li>
            <li><Link to="../../pages/RevisoesBreves">Revisoes Breves</Link></li>
            <li><Link to="../../AcionamentoSinistro">Acionamento Sinistro</Link></li>
          </ul>
       
      )}
    </div>
  );
};

export default Dropdown;