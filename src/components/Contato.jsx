import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Contato = () => {
  return (
    <div id='contato' className='text-white text-center mt-2rem'>
        <div className='border-b-1 border-gray-500 m-5'>
        <h2 className='text-center text-white font-bold text-[25px] md:text-[35px] mt-[18rem] mb-[2rem]'>Entre em contato comigo.</h2>
        <p className='text-[20px] md:m-[25px] md:text-[20px] text-white text-center mb-[5rem]'> Estou sempre disponível, Indenpedente se você tem apenas uma simples pergunta ou quer dizer olá, responderei você o mais rápido possível. Sinta-se a vontade para mandar qualquer mensagem sobre alguma notícia de emprego.</p>
        </div>
        <div>
            <div>
                2025 Pedro Lukas. Todos os direitos reservados.
            </div>
            <div className='m-5 flex gap-5 justify-center '>
                <a href="https://github.com/PedrooLukas" className='hover:text-[#A8F1FF]'><span>GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
                <a href="https://www.linkedin.com/in/pedro-lukas-167aa9368/" className='hover:text-[#A8F1FF]'><span>Linkedin <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pedroolukas2319@gmail.com&su=Contato%20Importante" target="_blank" className='hover:text-[#A8F1FF]'><span>Email <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
                <a href="https://x.com/hahahapedro" className='hover:text-[#A8F1FF]'><span>Twitter/X <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span></a>
            </div>
        </div>
    </div>
  )
}

export default React.memo(Contato)
