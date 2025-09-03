import React from 'react'

const AboutMe = () => {
  return (
    <div id='about' className="flex flex-col items-center">
      <h2 className='text-center text-white font-bold text-[35px] mt-[18rem] mb-[2rem]'>
        Sobre mim
      </h2>

      <div className='text-justify text-[#316370] text-[20px] md:text-[25px] w-[90%] md:w-[50%] bg-[#B4C2D1] rounded-2xl p-9 mb-[3rem]'>
        Olá! Me chamo <span className='text-black font-bold'>Pedro Lukas </span> 
        e sou um <span className='text-black font-bold'>Desenvolvedor Full Stack </span> 
        com afinidade no uso de <span className='text-black font-bold'>React</span>, 
        <span className='text-black font-bold'> Java </span>e 
        <span className='text-black font-bold'> Spring Boot</span>. 
        Estou à procura de uma primeira experiência na área de desenvolvimento web. 
        Estou sempre estudando e dedicado a aprender as tecnologias necessárias 
        para atender a demanda dos usuários. Busco desenvolver projetos que contenham 
        uma UI/UX agradável, boa performance e sempre atendam os pedidos. 
        Gosto bastante de estudar e entender a lógica por trás de grandes 
        aplicações da internet, e por isso estou constantemente aprendendo algo novo.
      </div>

      <div className='text-justify text-[#316370] text-[20px] md:text-[25px] w-[90%] md:w-[50%] bg-[#B4C2D1] rounded-2xl p-9 mb-[3rem]'>
        O <span className='text-black font-bold'>React</span> foi um grande passo 
        para eu desenvolver o gosto pela programação, com inúmeras funcionalidades 
        que me ajudaram muito a entender como funcionam diversas situações. 
        O <span className='text-black font-bold'>Java</span> aliado ao 
        <span className='text-black font-bold'> Spring Boot</span> me permitiu 
        expandir meus conhecimentos para o back-end, consolidando meu caminho 
        como <span className='text-black font-bold'>Full Stack</span>. 
        O <span className='text-black font-bold'>SEO</span> também é uma das prioridades: 
        desde o advento do HTML5, faz-se necessário dar atenção a esse parâmetro tão importante 
        dos websites. Estou sempre tentando desenvolver sistemas que resolvam algum tipo de problema 
        que percebo no dia a dia da internet, unindo boas práticas de 
        <span className='text-black font-bold'> UI/UX</span>, performance e escalabilidade.
      </div>
    </div>
  )
}

export default React.memo(AboutMe)
