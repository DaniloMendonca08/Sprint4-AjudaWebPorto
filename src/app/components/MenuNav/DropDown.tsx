"use client"

import { useEffect, useState } from 'react';
import IconeMenu from '../../../assets/iconeMenu.png'
import './DropDown.style.css'
import Link from 'next/link';
import { Imagem } from '../Imagem/Imagem';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="dropdown">
      <button className="dropdown-img" onClick={toggleDropdown}>
        <Imagem img={IconeMenu} descricao="Icone de menu" />
      </button>
      {isOpen && windowWidth !== 0 && (
           <ul className="dropdown-menu">
            {windowWidth === 320 || windowWidth === 375 || windowWidth === 425 || windowWidth === 768 ? (
            <>
              <li>
                <Link href="/Ajuda">Ajuda</Link>
              </li>
              <li>
              <Link href="/Organograma">Organog.</Link>
              </li>
              <li>
                <Link href="/CentralSolucoes">Central</Link>
              </li>
              <li>
                <Link href="/ReportarProblema">Reportar</Link>
              </li>
              <li>
                <Link href="/RevisoesBreves">Revisoes</Link>
              </li>
              <li>
                <Link href="/AcionamentoSinistro">Acionar</Link>
              </li>
              <li>
                <Link href="/FazerCadastro">Cadastro</Link>
              </li>
              <li>
                <Link href="/SolucaoPorto">Solução</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/Ajuda">Ajuda</Link>
              </li>
              <li>
                <Link href="/Organograma">Organograma</Link>
              </li>
              <li>
                <Link href="/CentralSolucoes">Central Soluções</Link>
              </li>
              <li>
                <Link href="/ReportarProblema">Reportar Problema</Link>
              </li>
              <li>
                <Link href="/RevisoesBreves">Revisoes Breves</Link>
              </li>
              <li>
                <Link href="/AcionamentoSinistro">Acionamento Sinistro</Link>
              </li>
              <li>
                <Link href="/FazerCadastro">Fazer Cadastro</Link>
              </li>
              <li>
                <Link href="/SolucaoPorto">Solução Porto</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;