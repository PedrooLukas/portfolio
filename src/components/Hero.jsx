import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pedro from '../imgs/pedro.png'; // Certifique-se que este caminho está correto

const Hero = () => {
  return (
    <div id='home' className='pt-12 pb-10 sm:pt-16 md:pt-0'>
      {/* Container Flex Principal */}
      <div className='flex flex-col md:flex-row md:justify-end items-center mt-8 md:mt-[5rem] px-4 md:px-0'>
        
        {/* Bloco de Conteúdo de Texto */}
        <div className='w-full md:w-auto text-center md:text-left md:mx-[60px] md:px-[1rem] order-2 md:order-1'>
          <h2 className='font-light text-white text-xl sm:text-1xl md:text-[25px]'>
            Olá, seja bem vindo!
          </h2>
          <h1 className='font-light text-white text-xl sm:text-2xl md:text-[25px] mt-1'>
            Me chamo 
            <span className='block xs:inline text-[#A8F1FF] text-2xl sm:text-3xl md:text-[32px] font-semibold ml-0 xs:ml-1'> Pedro Lukas!</span>
          </h1>
          
          {/* Container da TypeAnimation */}
          <div className='w-full md:min-w-[600px] mt-4'>
            <TypeAnimation
              sequence={[
                'Sou um desenvolvedor Front-END.', 1000,
                'Crio sites com React.', 1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '1.5em', color: 'white', display: 'inline-block' }}
              repeat={Infinity}
              className="h-10 sm:h-12 md:h-14" 
            />
          </div>
        </div>
        
        {/* Bloco da Imagem */}
        <div className='order-1 md:order-2 mb-8 md:mb-0'>
          <img 
            className='w-48 h-48 rounded-full object-cover 
                       sm:w-60 sm:h-60 
                       md:w-[680px] md:h-auto md:rounded-none'
            src={pedro} 
            alt="Desenvolvedor Pedro Lukas" 
          />
        </div>
      </div>
    </div>
  )
}

export default Hero