import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import eu_cartoon from '../imgs/eu_cartoon.jpg';
import ats_pedrolukas from '../imgs/ats_pedrolukas.pdf';
import { useLanguage } from '../contexts/LanguageContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const { t } = useLanguage();
  
  const techStack = ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Java', 'Spring Boot'];
  const tools = ['Git', 'GitHub', 'Docker', 'PostgreSQL', 'SQLite'];

  return (
    <div id='home' className='container mx-auto px-4 pt-12 pb-20'>
      <div className='flex flex-col lg:flex-row justify-between items-start gap-12 mt-8 md:mt-[5rem]'>
        
        <div className='flex-1 max-w-2xl'>
          <h1 className='text-white text-5xl md:text-6xl font-bold mb-4'>
            PEDRO LUKAS
          </h1>
          
          <div className='text-gray-300 text-lg md:text-xl mb-8 leading-relaxed'>
            <TypeAnimation
              sequence={[
                t.hero.typeAnimation1, 3000,
                t.hero.typeAnimation2, 3000
              ]}
              wrapper="p"
              speed={70}
              repeat={Infinity}
              key={t.hero.typeAnimation1}
            />
          </div>

          <p className='text-gray-400 text-base mb-8 leading-relaxed text-justify'>
            {t.about.intro} <span className='text-[#1CB5E0] font-semibold'>Pedro Lukas</span> {t.about.introText} <span className='text-[#1CB5E0] font-semibold'>{t.about.role}</span> {t.about.withAffinity} <span className='text-[#1CB5E0] font-semibold'>React, Java</span> e <span className='text-[#1CB5E0] font-semibold'>Spring Boot</span>. {t.about.lookingFor}
          </p>

          <div className='flex flex-wrap gap-4 mb-8'>
            <a 
              href='#contato'
              className='px-6 py-3 bg-[#1CB5E0] text-[#0f1620] font-semibold rounded-lg hover:bg-[#1698bd] transition-colors duration-200'
            >
              {t.hero.contactBtn}
            </a>
            <a 
              href={ats_pedrolukas}
              download
              className='px-6 py-3 bg-gradient-to-br from-[#1a2332] to-[#0f1620] text-white font-semibold border border-[#1CB5E0]/30 rounded-lg hover:border-[#1CB5E0]/60 hover:shadow-[0_0_20px_rgba(28,181,224,0.3)] transition-all duration-200'
            >
              {t.hero.downloadBtn}
            </a>
          </div>

          <div className='space-y-4'>
            <div>
              <h3 className='text-white text-sm font-semibold mb-3'>{t.hero.techStack}</h3>
              <div className='flex flex-wrap gap-2'>
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className='px-3 py-1.5 text-sm bg-[#1a2332] text-gray-300 border border-[#1CB5E0]/20 rounded-md hover:border-[#1CB5E0]/50 transition-colors'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className='flex gap-4 pt-4'>
              <a href='https://github.com/PedrooLukas' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-[#1CB5E0] transition-colors'>
                <FaGithub size={24} />
              </a>
              <a href='#' className='text-gray-400 hover:text-[#1CB5E0] transition-colors'>
                <FaLinkedin size={24} />
              </a>
              <a href='#' className='text-gray-400 hover:text-[#1CB5E0] transition-colors'>
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className='flex-1 max-w-2xl relative flex flex-col items-center'>
          <div className='relative mb-8 flex justify-center'>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-[#1CB5E0]/20 to-transparent rounded-full blur-3xl'></div>
              <img 
                className='relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-[#1CB5E0]/30 shadow-[0_0_50px_rgba(28,181,224,0.3)]'
                src={eu_cartoon} 
                alt="Desenvolvedor Pedro Lukas" 
              />
            </div>
          </div>

          <div className='w-full bg-gradient-to-br from-[#1a2332] to-[#0f1620] border border-[#1CB5E0]/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(28,181,224,0.2)]'>
            <div className='bg-[#0d1117] px-4 py-3 flex items-center gap-2 border-b border-[#1CB5E0]/20'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
              <span className='ml-4 text-gray-400 text-sm'>Full-stack developer</span>
            </div>
            
            <div className='p-6 font-mono text-sm'>
              <div className='text-purple-400'>const <span className='text-blue-400'>developer</span> = {'{'}</div>
              <div className='ml-4 text-gray-300'>
                <span className='text-red-400'>name:</span> <span className='text-green-400'>'Pedro Lukas'</span>,
              </div>
              <div className='ml-4 text-gray-300'>
                <span className='text-red-400'>skills:</span> {'{'}
              </div>
              <div className='ml-8 text-gray-300'>
                <span className='text-red-400'>frontend:</span> [<span className='text-green-400'>'React'</span>, <span className='text-green-400'>'Next.js'</span>, <span className='text-green-400'>'TypeScript'</span>],
              </div>
              <div className='ml-8 text-gray-300'>
                <span className='text-red-400'>backend:</span> [<span className='text-green-400'>'Java'</span>, <span className='text-green-400'>'Spring Boot'</span>, <span className='text-green-400'>'Node.js'</span>],
              </div>
              <div className='ml-8 text-gray-300'>
                <span className='text-red-400'>databases:</span> [<span className='text-green-400'>'PostgreSQL'</span>, <span className='text-green-400'>'MongoDB'</span>],
              </div>
              <div className='ml-8 text-gray-300'>
                <span className='text-red-400'>tools:</span> [<span className='text-green-400'>'Git'</span>, <span className='text-green-400'>'Docker'</span>, <span className='text-green-400'>'GitHub'</span>]
              </div>
              <div className='ml-4 text-gray-300'>{'}'},</div>
              <div className='ml-4 text-gray-300'>
                <span className='text-red-400'>createSolution:</span> <span className='text-purple-400'>(problem)</span> <span className='text-blue-400'>=&gt;</span> {'{'}
              </div>
              <div className='ml-8 text-purple-400'>
                return <span className='text-yellow-400'>robustAndScalableSolution</span>;
              </div>
              <div className='ml-4 text-gray-300'>{'}'}</div>
              <div className='text-purple-400'>{'}'};</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Hero)