import "./about.css"
import web_design from "../../images/web_design.jpg"
import Coding from "../../images/Coding.png"


const About = () => {

    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={web_design} alt="about_img" className="a-img" />
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I completed my Mechanical Engineering from Cochin University in 2013 and have worked in the Oil & Gas Construction field for the last 8 years both in India and abroad</p>
                <p className="a-desc">I decided to switch my domain to Web Developement at the end of 2021 because I felt really unhappy with the work-life balance at my old job. I had always been interested in coding and Computer Science had been my second choice for my Engineering stream. After a bit of research I found Web Developement to be a great fit for my needs and decided to take a risk and pursue my dreams. So I joined the M.E.(A).R.N stack course at Luminar Technolab and started to learn the basics while building my own projects on the side. Hope this section gave brief idea of what my motivations are and how hard I will work to succeed.</p>
                <div className="a-award">
                    <img src={Coding} alt="about_me" className="a-award-img" />
                    
                </div>
            </div>
        </div>
    );

}

export default About