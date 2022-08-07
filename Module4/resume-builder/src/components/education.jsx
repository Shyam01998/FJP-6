import Preview from "./preview";
import "./education.css"
import { useState } from "react";
import { Link } from "react-router-dom";


function Education(){
    const [education, setContact] = useState({});

    const onChange = (event)=>{
        let key = event.target.id;
        let value = event.target.value;
        setContact({...education,[key]:value})
    }

    const getFieldData = (key)=>{
        if(education[key]){
            return education[key];
        }
        return "";
    }
    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>Education Details</h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">Collage Name</label>
                        <input type="text" id="collageName" value={getFieldData("collageName")} onChange={onChange}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Degree</label>
                        <input type="text" id="degree" value={getFieldData("degree")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">CGPA</label>
                        <input type="text" id="cgpa" value={getFieldData("cgpa")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">City</label>
                        <input type="text" id="city" value={getFieldData("city")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" id="state" value={getFieldData("state")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Graduation Month</label>
                        <input type="text" id="graduationMonth" value={getFieldData("graduationMonth")} onChange={onChange} />
                    </div>

                    <div className="input-group full">
                        <label htmlFor="">Graduation Year</label>
                        <input type="text" id="graduationYear" value={getFieldData("graduationYear")} onChange={onChange} />
                    </div>    
                    <div className="next full">
                        <Link to="/contact"><div className="btn">Back</div></Link>
                    </div> 
                    <div className="back full">
                        <Link to="/"><div className="btn">Next</div></Link>
                    </div>
                </div>
            </div>

            <div className="preview-form">
                <Preview/>
            </div>
        </div>
    )
}

export default Education;