import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  'pt-BR': {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      about: 'Sobre',
      contact: 'Contato'
    },
    hero: {
      badge: '🚀 DESENVOLVEDOR FULL STACK',
      greeting: 'Olá, sou',
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvedor Full Stack com foco em React, Java e Spring Boot. Apaixonado por criar soluções web inovadoras e eficientes.',
      typeAnimation1: 'Desenvolvimento Full Stack com foco e entusiasmo para criar soluções poderosas e inovadoras.',
      typeAnimation2: 'Criando experiências digitais excepcionais com código limpo e eficiente.',
      contactBtn: 'Entre em Contato',
      downloadBtn: 'Baixar CV',
      techStack: 'TECH STACK:'
    },
    projects: {
      title: 'Meus Projetos',
      viewOnGithub: 'Ver no GitHub',
      viewLive: 'Ver projeto ao vivo'
    },
    about: {
      title: 'Sobre mim',
      intro: 'Olá! Me chamo',
      introText: 'e sou um',
      role: 'Desenvolvedor Full Stack',
      withAffinity: 'com afinidade no uso de',
      lookingFor: 'Estou à procura de uma primeira experiência na área de desenvolvimento web. Estou sempre estudando e dedicado a aprender as tecnologias necessárias para atender a demanda dos usuários. Busco desenvolver projetos que contenham uma UI/UX agradável, boa performance e sempre atendam os pedidos. Gosto bastante de estudar e entender a lógica por trás de grandes aplicações da internet, e por isso estou constantemente aprendendo algo novo.',
      paragraph2: 'foi um grande passo para eu desenvolver o gosto pela programação, com inúmeras funcionalidades que me ajudaram muito a entender como funcionam diversas situações.',
      paragraph2Continuation: 'aliado ao',
      paragraph2Middle: 'me permitiu expandir meus conhecimentos para o back-end, consolidando meu caminho como',
      paragraph2End: 'também é uma das prioridades: desde o advento do HTML5, faz-se necessário dar atenção a esse parâmetro tão importante dos websites. Estou sempre tentando desenvolver sistemas que resolvam algum tipo de problema que percebo no dia a dia da internet, unindo boas práticas de',
      performance: 'performance e escalabilidade.'
    },
    contact: {
      title: 'Entre em contato comigo.',
      description: 'Estou sempre disponível, Independente se você tem apenas uma simples pergunta ou quer dizer olá, responderei você o mais rápido possível. Sinta-se à vontade para mandar qualquer mensagem sobre alguma notícia de emprego.',
      copyright: '2025 Pedro Lukas. Todos os direitos reservados.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      twitter: 'Twitter/X'
    }
  },
  'en-US': {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      badge: '🚀 FULL STACK DEVELOPER',
      greeting: 'Hello, I am',
      role: 'Full Stack Developer',
      description: 'Full Stack Developer focused on React, Java and Spring Boot. Passionate about creating innovative and efficient web solutions.',
      typeAnimation1: 'Full Stack development with a pronounced focus and enthusiasm for creating powerful and innovative solutions.',
      typeAnimation2: 'Creating exceptional digital experiences with clean and efficient code.',
      contactBtn: 'Contact me',
      downloadBtn: 'Download CV',
      techStack: 'TECH STACK:'
    },
    projects: {
      title: 'My Projects',
      viewOnGithub: 'View on GitHub',
      viewLive: 'View live project'
    },
    about: {
      title: 'About Me',
      intro: 'Hello! My name is',
      introText: 'and I am a',
      role: 'Full Stack Developer',
      withAffinity: 'with affinity in using',
      lookingFor: "I'm looking for my first experience in web development. I'm always studying and dedicated to learning the necessary technologies to meet user demands. I seek to develop projects that contain a pleasant UI/UX, good performance and always meet the requirements. I really like to study and understand the logic behind great internet applications, and that's why I'm constantly learning something new.",
      paragraph2: 'was a big step for me to develop a taste for programming, with numerous features that helped me a lot to understand how different situations work.',
      paragraph2Continuation: 'combined with',
      paragraph2Middle: 'allowed me to expand my knowledge to the back-end, consolidating my path as',
      paragraph2End: 'is also one of the priorities: since the advent of HTML5, it is necessary to pay attention to this very important parameter of websites. I am always trying to develop systems that solve some kind of problem that I notice in the daily life of the internet, combining best practices of',
      performance: 'performance and scalability.'
    },
    contact: {
      title: 'Get in touch with me.',
      description: "I'm always available, whether you have a simple question or just want to say hello, I'll respond as quickly as possible. Feel free to send any message about job opportunities.",
      copyright: '2025 Pedro Lukas. All rights reserved.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      twitter: 'Twitter/X'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt-BR');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt-BR' ? 'en-US' : 'pt-BR');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
