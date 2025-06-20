import React from 'react';

interface ScrollToTopProps {
  isVisible: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ isVisible }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`fixed bottom-8 right-8 w-12 h-12 text-xl text-white bg-[#7f23fe] rounded-full shadow-xl z-[9999] group overflow-hidden cursor-pointer transition-all duration-300 ease-in-out
          opacity-100 scale-100
          hover:bg-[#5c1cc4] hover:scale-110`}
        >
          ↑
          <span className="absolute inset-0 rounded-full border-4 border-transparent border-t-white border-r-white transition-transform duration-700 group-hover:rotate-[360deg] pointer-events-none"></span>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
