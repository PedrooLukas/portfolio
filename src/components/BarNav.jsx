import React, { useState } from 'react'; // Importe useState
import './BarNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDisplay, faUser, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Adicione faTimes

const BarNav = () => {
  // Estado para controlar a visibilidade do menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função para alternar o estado do menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <nav className='w-full my-[2rem] flex md:justify-center items-center px-4 sm:px-6 md:px-0 x3:m-12'>
        <div className='text-white hidden md:block'>
          <ul className='flex gap-10 items-center'>
            <a href="#home">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faHouse} /> Home
              </li>
            </a>
            <a href="#projetos">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faDisplay} /> Projetos
              </li>
            </a>
            <a href="#about">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faUser} /> Sobre mim
              </li>
            </a>
            <a href="#contato">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faEnvelope} /> Contato
              </li>
            </a>
          </ul>
        </div>

        <div className='md:hidden justify-end'>
          <button
            onClick={toggleMobileMenu}
            className='text-[#A8F1FF] text-[25px] p-2'
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className='md:hidden bg-transparent text-white px-4 pb-4'>
          <ul className='flex flex-col items-center gap-5 mt-3'> 
            <a href="#home" onClick={toggleMobileMenu}>
              <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
                <FontAwesomeIcon icon={faHouse} /> Home
              </li>
            </a>
            <a href="#projetos" onClick={toggleMobileMenu}>
              <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
                <FontAwesomeIcon icon={faDisplay} /> Projetos
              </li>
            </a>
            <a href="#about" onClick={toggleMobileMenu}>
              <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
                <FontAwesomeIcon icon={faUser} /> Sobre mim
              </li>
            </a>
            <a href="#contato" onClick={toggleMobileMenu}>
              <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
                <FontAwesomeIcon icon={faEnvelope} /> Contato
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BarNav;