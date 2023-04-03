import React, { useState, useEffect } from 'react'

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div>
            {backToTopButton && (<>
                <button style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    height: "50px",
                    width: "50px",
                    fontSize: "50px",
                    zIndex: "99999999999999999999999999999999999999999999999999999999999999999999999999"
                }}
                    onClick={scrollToTop}
                >
                    m
                </button>
            </>)}
        </div>
    )
}

export default BackToTopButton