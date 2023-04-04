import React, { useState, useEffect } from 'react'

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(true)


    useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 100) {
            setBackToTopButton(true);
            console.log(window.scrollY);
          } else {
            setBackToTopButton(false);
          }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [true]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    console.log(backToTopButton, 'backToTopButton');

    return (
        <div>
            {backToTopButton === true && (<>
                <button style={{
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
                    zIndex: 999
                }}
                    onClick={scrollToTop}
                >
                    <i class="fa fa-angle-up"></i>
                </button>
            </>)}
        </div>
    )
}

export default BackToTopButton