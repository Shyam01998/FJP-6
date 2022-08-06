import about from '../static/images/aboutus.jpg';
import "./about.css"

const About= ()=>{
    return (
        <>
        <div className="about">
            <div className="left-about">
                <p>Do you have any question ? Connect with us</p>
                <h2>Shyamsundarsahoo98@gmail.com</h2>
                <p>We are here to answer any questions</p>
            </div>
            <div className="right-about">
                <img src={about} alt="Image not available" />
            </div>
        </div>
        </>
    )
}

export default About