import "../Style/work.css"
import ecommerce from "../assets/ecommerce.png"
import { FaGithub } from "react-icons/fa";
export default function Work(){
    var projects = [
        {
            title:"Ecommerce Platform",
            image: ecommerce,
            detail: "The Platform that allows user to put on house to sell/rent, The users can also buy/rent and can contact with the properties' owners as well.",
            languages: ["Html","CSS","Javascript","Python"],
            stakes: ["React.js","FastApit"],
            github: "https://github.com/keanghongtang-afk/Rent-n-Sell-estate-web-page"
        }
    ];
    return (
        <div className="work-section" id="project">
            <div className="header-box">Projects</div>
            <h1>The Best Projects of all my projects</h1>
            <p>A selection of recent work that showcases my approach to problem-solving and design<br/>(You can click on the image to go to my project)</p>
            {projects.map(project => {
                return (
                    <div className="project">
                        <div className="image">
                            <a href="https://realestate-hong.netlify.app/"><img src={project.image} alt="project" className="project-img"/></a>
                            <a href={project.github} className="git"><FaGithub/></a>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.detail}</p>
                        <div className="contain-lang">
                            {project.languages.map(lang => {
                                return (
                                    <div className="lang-box">{lang}</div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}