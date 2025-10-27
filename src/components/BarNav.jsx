import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDisplay, faUser, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactCountryFlag from 'react-country-flag';
import { useLanguage } from '../contexts/LanguageContext';

const BarNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      <nav className='w-full text-[20px] my-[2rem] flex md:justify-between items-center px-4 sm:px-6 md:px-8 x3:m-12'>
        <div className='text-white hidden md:block flex-1'>
          <ul className='flex gap-10 items-center justify-center'>
            <a href="#home">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faHouse} /> {t.nav.home}
              </li>
            </a>
            <a href="#projetos">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faDisplay} /> {t.nav.projects}
              </li>
            </a>
            <a href="#about">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faUser} /> {t.nav.about}
              </li>
            </a>
            <a href="#contato">
              <li className='hover:text-[#A8F1FF] flex items-center gap-2'>
                <FontAwesomeIcon icon={faEnvelope} /> {t.nav.contact}
              </li>
            </a>
          </ul>
        </div>

        {/* Language Toggle - Desktop */}
        <div className='hidden md:flex items-center'>
          <button
            onClick={toggleLanguage}
            className='flex items-center gap-2 text-white hover:text-[#A8F1FF] transition-colors duration-200'
            title={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
          >
            <ReactCountryFlag
              countryCode={language === 'pt-BR' ? 'US' : 'BR'}
              svg
              style={{
                width: '1.5em',
                height: '1.5em',
              }}
            />
            <span className='text-[16px]'>{language === 'pt-BR' ? 'EN' : 'PT'}</span>
          </button>
        </div>

        <div className='md:hidden flex items-center gap-3'>
          {/* Language Toggle - Mobile */}
          <button
            onClick={toggleLanguage}
            className='text-white hover:text-[#A8F1FF] transition-colors'
            title={language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
          >
            <ReactCountryFlag
              countryCode={language === 'pt-BR' ? 'US' : 'BR'}
              svg
              style={{
                width: '1.8em',
                height: '1.8em',
              }}
            />
          </button>
          
          <button
            onClick={toggleMobileMenu}
            className='text-[#A8F1FF] text-[25px] p-2'
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

<div
  className={`md:hidden bg-transparent text-white px-4 pb-4 overflow-hidden transition-all duration-300 ease-in-out ${
    isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
  }`}
>
  <ul className='flex flex-col items-center gap-5 mt-3'>
    <a href="#home">
      <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
        <FontAwesomeIcon icon={faHouse} /> {t.nav.home}
      </li>
    </a>
    <a href="#projetos">
      <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
        <FontAwesomeIcon icon={faDisplay} /> {t.nav.projects}
      </li>
    </a>
    <a href="#about">
      <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
        <FontAwesomeIcon icon={faUser} /> {t.nav.about}
      </li>
    </a>
    <a href="#contato">
      <li className='hover:text-[#A8F1FF] flex items-center gap-2 text-lg'>
        <FontAwesomeIcon icon={faEnvelope} /> {t.nav.contact}
      </li>
    </a>
  </ul>
</div>
    </div>
  );
};

export default React.memo(BarNav)