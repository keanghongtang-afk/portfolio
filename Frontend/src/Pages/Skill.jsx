import { Code2, Database, Palette, Server,Zap, Smartphone } from "lucide-react";
import "../Style/skill.css"

export default function Skill(){

    const skills = [
          {
            icon: <Code2 className="icon2"/>,
            title: "Frontend Development",
            description: "React, Next.js, Javascript, Bootstrap/Tailwind CSS",
          },
          {
            icon: <Server className="icon2"/>,
            title: "Backend Development", 
            description: "Python, MySQL,FastApi , REST APIs",
          },
          {
            icon: <Database className="icon2"/>,
            title: "Database Management",
            description: "PostgreSQL, MongoDB",
          },
          {
            icon: <Palette className="icon2"/>,
            title: "UI/UX Design",
            description: "Figma, Design Systems, Accessibility",
          },
          {
            icon: <Smartphone className="icon2"/>,
            title: "Mobile Development",
            description: "None",
            },
        {
            icon: <Zap className="icon2"/>,
            title: "Performance Optimization",
            description: "Web Vitals, Code Splitting, Caching",
        },
        ];

    const techs = [
              "React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS",
              "GraphQL", "PostgreSQL", "Docker", "AWS", "Git",
              "Python", "MongoDB", "Redis", "Figma", "Jest"
            ];
    return (
        <>
            <div className="skill-section" id="skill">
                <div className="contain-text">
                    <p className="header-box">Skills & Expertise</p>
                    <h1>What I bring to the table</h1>
                    <p>A comprehensive skill set to bring your vision to life with modern, scalable solutions</p>
                </div>
                <div className="skill-contain">
                    {skills.map((skill) => {
                        return (
                        <div className="contain-skill">
                            {skill.icon}
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                        </div>
                        );
                    })}
                </div>
                <div className="technologies">
                    <h3>Technologies I work with</h3>
                    <div className="tech-contain">
                        {techs.map((tech) => {
                            return (
                                <div className="tech-box">{tech}</div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}