import "./template.css"
import skin1 from "../static/images/skin1.svg";
import skin2 from "../static/images/skin2.svg";
import skin3 from "../static/images/skin3.svg";
import skin4 from "../static/images/skin4.svg";
import skin5 from "../static/images/skin5.svg";
import skin6 from "../static/images/skin6.svg";
import skin7 from "../static/images/skin7.svg";
import skin8 from "../static/images/skin8.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSkinCreator } from "../redux/action";


const Template= ()=>{
    let dispatch = useDispatch();
    const handleSkinSelect = (skinCode)=>{
        dispatch(setSkinCreator(skinCode))
    }
    return (
        <>
        <div className="templates">
            <div className="templates-intro">
                <h1>Select a resume template</h1>
                <p>You can edit and change it later!</p>
            </div>
            <div className="templates-style">
                <div className="template" onClick={()=>{handleSkinSelect("skin2")}}>
                    <img src={skin1} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            
                <div className="template" onClick={()=>{handleSkinSelect("skin1")}}>
                    <img src={skin2} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            
                <div className="template" onClick={()=>{handleSkinSelect("skin5")}}>
                    <img src={skin3} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            
                <div className="template" onClick={()=>{handleSkinSelect("skin1")}}>
                    <img src={skin4} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            
                <div className="template" onClick={()=>{handleSkinSelect("skin5")}}>
                    <img src={skin5} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            
                <div className="template" onClick={()=>{handleSkinSelect("skin2")}}>
                    <img src={skin6} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
          
                <div className="template" onClick={()=>{handleSkinSelect("skin1")}}>
                    <img src={skin7} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            
                <div className="template" onClick={()=>{handleSkinSelect("skin5")}}>
                    <img src={skin8} alt="template not available" ></img>
                    <Link to="/contact"><button className="template-btn">USE TEMPLATE</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Template