import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../contexts/LanguageContext';

const Contato = () => {
  const { t } = useLanguage();
  
  return (
    <div id='contato' className='text-white text-center mt-2rem'>
        <div className='border-b-1 border-gray-500 m-5'>
        <h2 className='text-center text-white font-bold text-[25px] md:text-[35px] mt-[18rem] mb-[2rem]'>{t.contact.title}</h2>
        <p className='text-[20px] md:m-[25px] md:text-[20px] text-white text-center mb-[5rem]'>{t.contact.description}</p>
        </div>
        <div>
            <div>
                {t.contact.copyright}
            </div>
            <div className='m-5 flex gap-5 justify-center flex-wrap'>
                <a href="https://github.com/PedrooLukas" className='hover:text-[#A8F1FF]'><span>{t.contact.github} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
                <a href="https://www.linkedin.com/in/pedro-lukas-167aa9368/" className='hover:text-[#A8F1FF]'><span>{t.contact.linkedin} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pedroolukas2319@gmail.com&su=Contato%20Importante" target="_blank" rel="noopener noreferrer" className='hover:text-[#A8F1FF]'><span>{t.contact.email} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
                <a href="https://x.com/hahahapedro" className='hover:text-[#A8F1FF]'><span>{t.contact.twitter} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Contato)
