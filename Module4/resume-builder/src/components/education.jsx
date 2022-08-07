import Preview from "./preview";
import "./education.css"


function Education(){
    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>Education Details</h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">Collage Name</label>
                        <input type="text" id="collageName" value="Imit" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Degree</label>
                        <input type="text" id="lname" value="Last Name" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">CGPA</label>
                        <input type="text" id="degree" value="Last name" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">City</label>
                        <input type="text" id="city" value="abc@gmail.com" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">State</label>
                        <input type="text" id="state" value="89934939939" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Graduation Month</label>
                        <input type="text" id="pGraduationMonth" value="professional" />
                    </div>

                    <div className="input-group full">
                        <label htmlFor="">Graduation Year</label>
                        <input type="text" id="GraduationYear" value="Shyam" />
                    </div>    
                    <div className="next full">
                        <div className="btn">Back</div>
                    </div> 
                    <div className="back full">
                        <div className="btn">Next</div>
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