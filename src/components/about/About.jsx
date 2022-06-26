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
                <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium voluptatum accusamus explicabo quia, iusto, maxime ipsa, fugiat ut natus repellendus recusandae repellat esse asperiores! Eum excepturi modi possimus nisi.</p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati culpa facere voluptatem, exercitationem iure, in, modi itaque perspiciatis doloremque molestiae quam inventore possimus eius labore quae saepe quisquam magnam.
                    Quos dignissimos labore dicta natus, dolores incidunt veniam enim accusantium id error voluptatum iure odio. Vitae amet fugiat eos ipsa laudantium inventore quaerat eaque? Veritatis dicta officiis maiores earum obcaecati!</p>
                <div className="a-award">
                    <img src={Coding} alt="about_me" className="a-award-img" />
                    
                </div>
            </div>
        </div>
    );

}

export default About