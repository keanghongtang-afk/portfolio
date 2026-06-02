import "../Style/contact.css"
import { Mail, Phone, LocateIcon, Send } from "lucide-react";

export default function Contact(){
    var info = {
        name: "KeangHong Tang",
        email: "keanghongtang@gmail.com",
        phone: "+855 10569629",
        location: ["Cambodia","Phnom Penh"]
    }

    var status = true;
    return (
        <div className="contact-section" id="contact">
            <div className="header-box">Contact</div>
            <h3>Let's build great things together</h3>
            <p>Have A Project in mind or just want to discuss tech?<br />I would love to hear from you</p>
            <div className="container-info">
                <div className="info-container">
                    <div className="info-box">
                        <Mail className="icon-exp"/>
                        <div className="info">
                            <p>email:</p><br />
                            <b>{info.email}</b>
                        </div>
                    </div>
                    <div className="info-box">
                        <Phone className="icon-exp"/>
                        <div className="info">
                            <p>Phone: </p><br />
                            <b>{info.phone}</b>
                        </div>
                    </div>
                    <div className="info-box">
                        <LocateIcon className="icon-exp"/>
                        <div className="info">
                            <p>Location: </p>
                            <b>{info.location[0]}, {info.location[1]}</b>
                        </div>
                    </div>
                    <div className={status?"availablity":"availablity No"} >
                        {status?
                        <div className="avail">
                            <b><span className="on"></span>  Currently Available</b>
                            <p>Open to new projects and collaboration</p>
                        </div>
                        :
                        <div className="unavail">
                            <b><span className="off"></span>  Currently Unavailable</b>
                            <p>Not Available for new projects</p>
                        </div>    
                    }
                    </div>
                </div>
                <form action="/email" method="post" className="message-form">
                    <b>Name</b><br />
                    <div className="input-box">
                        <input type="text" id="name" required/><label htmlFor="name">Your Name</label><br />
                    </div>
                    <b>Email</b><br />
                    <div className="input-box">
                        <input type="email" id="email" required/><label htmlFor="email">example@domain.com</label><br />
                    </div>
                    <b>Message</b><br />
                    <textarea name="message" id="message" cols={10} rows={10} placeholder="Enter Your message here..." required>
                    </textarea><br />
                    <button type="submit" className="btn-submit">Send Message<Send/></button>
                </form>
            </div>
        </div>
    );
}