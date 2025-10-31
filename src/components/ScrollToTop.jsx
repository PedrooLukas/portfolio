import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#316370] text-white rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(28,181,224,0.6)] hover:scale-110 transition-all duration-300 flex items-center justify-center'
          aria-label='Scroll to top'
        >
          <FontAwesomeIcon icon={faArrowUp} size='lg' />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
