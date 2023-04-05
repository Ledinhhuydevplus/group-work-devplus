import React, { useState, useEffect } from 'react'
import './backToTopButton.scss'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const container = document.querySelector('body');
    if (container > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    const container = document.querySelector('body');
    container.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{ 
        position: "fixed",
        bottom: "50px",
        right: "50px",
        height: "50px",
        width: "50px",
        paddingBottom: "3px",
        fontSize: "30px",
        textAlign: "center",
        borderRadius: "50px",
        border: "none",
        backgroundColor: "#226fb7",
        lineHeight: "15px",
        color: "#fff",
        transition: "all 0.3s ease",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
        zIndex: 999}}
    >
      <i class="fa fa-angle-up"></i>
    </button>
  )
}

export default BackToTopButton