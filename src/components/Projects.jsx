import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

const projectsData = [
    {
    title: "Fast Stack-Selector",
    description: "Um sistema que gera um CLI que instala suas dependencias rapidamente",
    image: "https://opengraph.githubassets.com/1/PedrooLukas/stack-selector",
    technologies: ["React", "TailWind", "JavaScript", "Shadcn"],
    githubUrl: "https://github.com/PedrooLukas/stack-selector",
    liveUrl: "https://github.com/PedrooLukas/stack-selector"
  },

  {
    title: "Meu portfólio",
    description: "Meu portfólio pessoal, onde apresento os meus projetos desenvolvidos.",
    image: "https://opengraph.githubassets.com/1/PedrooLukas/portfolio",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    githubUrl: "https://github.com/PedrooLukas/portfolio",
    liveUrl: ""
  },

    {
    title: "Gerador de QR Code",
    description: "Gera um QR Code baseado no link colado!",
    image: "https://opengraph.githubassets.com/1/PedrooLukas/QR-Code-Generator",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/PedrooLukas/QR-Code-Generator",
    liveUrl: "https://pedrolukas.github.io/QR-Code-Generator/"
  },

  {
    title: "Previsão do clima",
    description: "Um simples e prático sistema que mostra a previsão do clima atual e dos próximos 5 dias.",
    image: "https://opengraph.githubassets.com/1/PedrooLukas/Previs-o-do-Clima",
    technologies: ["HTML", "CSS", "Tailwind", "React"],
    githubUrl: "https://github.com/PedrooLukas/Previs-o-do-Clima",
    liveUrl: ""
  }
];

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <div className='container mx-auto px-4'>
      <h2 id='projetos' className='text-center text-white font-bold text-[35px] mt-[20rem] mb-[4rem]'>
        {t.projects.title}
      </h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-[4rem] max-w-6xl mx-auto'>
        {projectsData.map((project, index) => (
          <Card key={index} className='bg-gradient-to-br from-[#1a2332] to-[#0f1620] border border-[#1CB5E0]/20 overflow-hidden hover:border-[#1CB5E0]/60 hover:shadow-[0_0_30px_rgba(28,181,224,0.3)] transition-all duration-500 group'>
            
            {/* GitHub Preview Section */}
            <div className='relative w-full bg-[#0d1117] border-b border-[#1CB5E0]/20 overflow-hidden group/image'>
              <img 
                src={project.image} 
                alt={project.title}
                className='w-full h-auto object-contain transition-transform duration-300 group-hover/image:scale-105'
                loading="lazy"
              />
              
              {/* Hover Overlay with Icons */}
              <div className='absolute inset-0 bg-gradient-to-br from-[#1a2332]/95 to-[#0f1620]/95 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#1CB5E0]/20 hover:border-[#1CB5E0]/50 hover:scale-110 transition-all duration-200'
                    title="Ver projeto ao vivo"
                  >
                    <ExternalLink className='text-white' size={20} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-[#1CB5E0]/20 hover:border-[#1CB5E0]/50 hover:scale-110 transition-all duration-200'
                    title="Ver no GitHub"
                  >
                    <FaGithub className='text-white' size={20} />
                  </a>
                )}
              </div>
            </div>
            
            {/* Content Section */}
            <div className='p-6 space-y-4'>
              {/* Title and Technologies Badge */}
              <div className='space-y-3'>
                <div className='flex items-start justify-between gap-3'>
                  <CardTitle className='text-white text-2xl font-bold group-hover:text-[#1CB5E0] transition-colors duration-300'>
                    {project.title}
                  </CardTitle>
                  <FaGithub className='text-gray-400 flex-shrink-0 mt-1' size={24} />
                </div>
                
                {/* Tech Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className='px-3 py-1 text-xs font-semibold text-[#1CB5E0] bg-[#1CB5E0]/10 border border-[#1CB5E0]/30 rounded-full hover:bg-[#1CB5E0]/20 transition-all duration-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Description */}
              <CardDescription className='text-gray-300 text-base leading-relaxed'>
                {project.description}
              </CardDescription>
              
              {/* GitHub Link */}
              {project.githubUrl && (
                <div className='pt-2'>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex gap-2 items-center text-[#1CB5E0] font-semibold hover:text-white transition-colors duration-200 group/link"
                  >
                    Ver no GitHub 
                    <span className='group-hover/link:translate-x-1 transition-transform duration-200'>→</span>
                  </a>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Projects)
