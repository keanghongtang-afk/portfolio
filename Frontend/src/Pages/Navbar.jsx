import { useState, useEffect } from 'react';

import '../Style/Navbar.css'
export default function Navbar(){
    var [active, setActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    function toggleMenu(){
        setActive(prev => !prev);
    }
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
        <>
            <div className={scrolled?"navbar scrolled": "navbar"}>
                <div className="logo">TKH</div>
                <ul className={active?"nav active":"nav"}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {active?<div className="icon" onClick={toggleMenu}>X</div>:<div className="icon none" onClick={toggleMenu}>☰</div>}

            </div>
        </>
    );
}