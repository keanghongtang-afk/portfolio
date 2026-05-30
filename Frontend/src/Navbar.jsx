import { useState } from 'react';

import './Style/Navbar.css'
export default function Navbar(){
    var [active, setActive] = useState(false);
    function toggleMenu(){
        setActive(prev => !prev);
    }
    return (
        <>
            <div className="navbar">
                <div className="logo">TKH</div>
                <ul className={active?"nav active":"nav"}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {active?<div className="icon" onClick={toggleMenu}>X</div>:<div className="icon none" onClick={toggleMenu}>☰</div>}

            </div>
        </>
    );
}