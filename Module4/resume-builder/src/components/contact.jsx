import Preview from "./preview";
import "./contact.css"
import {Link} from "react-router-dom"
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addContactCreator } from "../redux/action";


function Contact(){
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();

    let contact = state.contactReducer;
    const onChange = (event)=>{
        let key = event.target.id;
        let value = event.target.value;
        
        let newContact = {...contact,[key]:value};
        dispatch(addContactCreator(newContact))
    }

    const getFieldData = (key)=>{
        if(contact[key]){
            return contact[key];
        }
        return "";
    }


    return(
        <div className="contact">
            <div className="contact-form">
                <div className="contact-heading">
                    <h1>Personal Details</h1>
                </div>
                <div className="contact-form-details">
                    <div className="input-group">
                        <label htmlFor="">First Name</label>
                        <input type="text" id="fname" value={getFieldData("fname")} onChange={onChange}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Last Name</label>
                        <input type="text" id="lname" value={getFieldData("lname")} onChange={onChange} />
                    </div>

                    <div className="input-group full">
                        <label htmlFor="">Professional Summary</label>
                        <input type="text" id="summary" value={getFieldData("summary")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">E-mail</label>
                        <input type="text" id="e-mail" value={getFieldData("e-mail")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Phone</label>
                        <input type="text" id="phone" value={getFieldData("phone")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Professional</label>
                        <input type="text" id="professional" value={getFieldData("professional")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Street</label>
                        <input type="text" id="street" value={getFieldData("street")} onChange={onChange} />
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
                        <label htmlFor="">Country</label>
                        <input type="text" id="country" value={getFieldData("country")} onChange={onChange} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="">Pin Code</label>
                        <input type="number" id="pin" value={getFieldData("pin")} onChange={onChange} />
                    </div>

                    <div className="next full">
                        <Link to="/template"><div className="btn">Back</div></Link>
                    </div> 
                    <div className="back full">
                    <Link to="/education"><div className="btn">Next</div></Link>
                    </div>

                    
                </div>
            </div>

            <div className="preview-form">
                <Preview/>
            </div>
        </div>
    )
}

export default Contact;