import { Briefcase, GraduationCap } from "lucide-react";

import "../Style/edu.css";

export default function Education(){

    var EducationBackground = [
        {
            school: "Paragon International University",
            period: "2025 - present",
            major:"Bachelor of Computer Science",
            detail:"Focus on software design, algorithm, and data structure.",
            skillLearn:["data structure","Algorithm","Software Design","Web design & development"]
        }
    ]

    var WorkExperiance = [
        {
            title: "String",
            company: "String",
            description: "String",
            period: "number to number",
            skillUse: ["String","String"]
        }
    ]

    return (
        <div className="edu-section" id="edu">
            <div className="header-box">Career Path</div>
            <h3>Education Background &<br /> Work Experience</h3>
            <div className="contain-all">
                <div className="work-exp">
                    {WorkExperiance.map(work => {
                        return (
                            <div className="contain-work">
                                <Briefcase className="icon-exp" />
                                <div className="box-work">
                                    <div className="header">
                                        <h3>{work.title}</h3>
                                        <p>{work.period}</p>
                                    </div>
                                    <h4>{work.company}</h4>
                                    <p>{work.description}</p>
                                    <div className="skill-container">
                                        {work.skillUse.map(skill => {
                                            return (
                                                <div className="skill-box">{skill}</div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="edu-background">
                    {EducationBackground.map(edu => {
                        return (
                            <div className="contain-edu">
                                <GraduationCap className="icon-exp"/>
                                <div className="box-edu">
                                    <div className="header">
                                        <h3>{edu.major}</h3>
                                        <p>{edu.period}</p>
                                    </div>
                                    <h4>{edu.school}</h4>
                                    <p>{edu.detail}</p>
                                    <div className="skill-container">
                                        {edu.skillLearn.map(skill => {
                                            return (
                                                <div className="skill-box">{skill}</div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}