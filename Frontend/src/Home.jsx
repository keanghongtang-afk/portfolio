

import profile_pic from "./assets/demo-profile.jpg"
import './Style/home.css'

export default function Home(){
    var status = false;

    const calculateAge = () => {
        const today = new Date();
        const birth = new Date("2007-11-13");

        let age = today.getFullYear() - birth.getFullYear();

        const monthDifference = today.getMonth() - birth.getMonth();

        if (
            monthDifference < 0 ||
            (monthDifference === 0)
        ) {
            age--;
        }
        return age;
    };
    return (
        <div id="about" className="about">
            <div className="profile">
                <p>Profile</p>
                <div className="profile-card">
                    <img src={profile_pic} alt="profile-pic" width="250"/>
                    <p>Name: Tang Keanghong</p>
                    <p>Age: {calculateAge()}</p>
                    <p>Current State: {status?"Mission Accomplished":"Jobless"}</p>
                </div>
            </div>
            <div className="about-me">
                <h3>Turing Ideas into Reality</h3>
                <h4>Driven by Innovation</h4>
                <p>Full-stack Dev & Game Developer, I am super duper passionate with work, especially work that pay alot. I am currently a university student but I am open to recruitment</p>
            </div>
            <div className="btn">
                <button>View</button>
            </div>
        </div>
    );
}