//import profile_pic from "./assets/demo-profile.jpg"
import '../Style/home.css'
import program_img from "../assets/program_image.jpg"
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
//import { Profiler } from 'react';

export default function Home(){
    var technologies = ["Python","Javascript","C++","Html","CSS","React.JS","Bootstrap","FastApi"];
    var projects = ["Ecommerce Platform"];
    
    return (
        <>
        <div id="about" className="about">
            <div className="idea">
                <h3>Turning Ideas into Reality</h3>
                <h4>Driven by Innovation</h4>
                <p>Full-stack developer & gamer passionate about building elegant, performant, and user-centered web applications</p>
            </div>
            <div className="btn">
                <a href="#project"><button className='view'>View Project <FaArrowRight></FaArrowRight></button></a>
                <a href="#contact"><button className='contact'>Get In Touch</button></a>
            </div>
            <div className="icon">
                <a href="https://github.com/keanghongtang-afk"><FaGithub size={30} className="ic"></FaGithub></a>
                <a href="https://www.linkedin.com/in/keanghong-tang-995719411/"><FaLinkedin size={30} className="ic"></FaLinkedin></a>
                <a href="mailto:keanghongtang@gmail.com"><FaMailBulk size={30} className="ic"></FaMailBulk></a>
            </div>
            <div className="ellipse">
                <div className="dot"></div>
            </div>
        </div>
        <div className="abt">
            <div className="head">About Me</div>
            <p>Building the Future,<br /> One Line at a Time</p>
            <div className="section1">
                <div className="contain-img">
                    <img src={program_img} alt="ProgramImg" className='programImg' height={400}/>
                    <div className="exp">
                        <p>1 yr</p>
                        <p>Years Experiance</p>
                    </div>
                </div>
                <div className="contain-text">
                    <p>
                        I'm a passionate full-stack developer with a love for creating seamless digital experiences. My journey in tech started with curiosity and evolved into a career building scalable, user-focused applications.
                        When I'm not coding, you'll find me exploring the latest gaming tech, optimizing my setup, or diving into new frameworks. I believe in clean code, elegant design, and the power of collaboration to solve complex problems.
                    </p>
                    <div className="contain-exp">
                        <div className='box0'>
                            <div className='box1'>
                                <h3>{projects.length}</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className='box1'>
                                <h3>{technologies.length}</h3>
                                <p>Technologies Mastered</p>
                            </div>
                        </div>
                        <div className='box0'>
                            <div className='box1'>
                                <h3>IDK Cannot Count</h3>
                                <p>Sleepless Night</p>
                            </div>
                            <div className='box1'>
                                <h3>N/A</h3>
                                <p>Lines of Code</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}