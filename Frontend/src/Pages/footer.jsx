import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

import "../Style/footer.css"

export default function Footer(){

    return (
        <div id="footer" className="footer">
            <div className="introduction">
                <h3>Tang Keanghong</h3>
                <p>Full-stack developer crafting beautiful digital experiences with modern technologies.</p>    
            </div> 
            <div className="quick-nav">
                <ul>
                    <h4>Quick Link</h4>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#edu">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="connect">
                <h4>Connect</h4>
                <a href="https://github.com/keanghongtang-afk"><FaGithub className="icon3"/></a>
                <a href="https://www.linkedin.com/in/keanghong-tang-995719411/"><FaLinkedin className="icon3"/></a>
                <a href="mailto:keanghongtang@gmail.com"><FaMailBulk className="icon3"/></a>
                <p>keanghongtang@gmail.com</p>
            </div>
        </div>
    );
}