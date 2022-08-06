import {Link} from "react-router-dom";
import resume from "../static/images/resume.png";
import "./landingPage.css";

const LandingPage= ()=>{
    return (
        <div className="landing-page">
            <h1>Create a resume that stands Out</h1>
            <p>Create a Resume that perfectally describes your skills and matche job profile.</p>
            <div>
                <Link to="/template">
                    <button className="btn">Get Started for Free</button>
                </Link>
            </div>
            <div className="logo">
                <img src={resume} alt="Image not available" />
            </div>
        </div>
    )
}

export default LandingPage