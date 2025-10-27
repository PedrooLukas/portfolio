import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const AboutMe = () => {
  const { t } = useLanguage();
  
  return (
    <div id='about' className="flex flex-col items-center container mx-auto px-4">
      <h2 className='text-center text-white font-bold text-[35px] mt-[18rem] mb-[4rem]'>
        {t.about.title}
      </h2>

      <div className='max-w-4xl w-full space-y-6 pb-[4rem]'>
        <div className='bg-gradient-to-br from-[#1a2332] to-[#0f1620] border border-[#1CB5E0]/20 rounded-lg p-6 hover:border-[#1CB5E0]/60 hover:shadow-[0_0_30px_rgba(28,181,224,0.3)] transition-all duration-500'>
          <p className='text-gray-300 text-base leading-relaxed'>
            {t.about.intro} <span className='text-[#1CB5E0] font-bold'>Pedro Lukas </span> 
            {t.about.introText} <span className='text-[#1CB5E0] font-bold'>{t.about.role} </span> 
            {t.about.withAffinity} <span className='text-[#1CB5E0] font-bold'>React</span>, 
            <span className='text-[#1CB5E0] font-bold'> Java </span>e 
            <span className='text-[#1CB5E0] font-bold'> Spring Boot</span>. 
            {t.about.lookingFor}
          </p>
        </div>

        <div className='bg-gradient-to-br from-[#1a2332] to-[#0f1620] border border-[#1CB5E0]/20 rounded-lg p-6 hover:border-[#1CB5E0]/60 hover:shadow-[0_0_30px_rgba(28,181,224,0.3)] transition-all duration-500'>
          <p className='text-gray-300 text-base leading-relaxed'>
            O <span className='text-[#1CB5E0] font-bold'>React</span> {t.about.paragraph2} 
            O <span className='text-[#1CB5E0] font-bold'>Java</span> {t.about.paragraph2Continuation} 
            <span className='text-[#1CB5E0] font-bold'> Spring Boot</span> {t.about.paragraph2Middle} 
            <span className='text-[#1CB5E0] font-bold'>Full Stack</span>. 
            O <span className='text-[#1CB5E0] font-bold'>SEO</span> {t.about.paragraph2End} 
            <span className='text-[#1CB5E0] font-bold'> UI/UX</span>, {t.about.performance}
          </p>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AboutMe)
