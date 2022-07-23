import { useState } from "react";
import  auth from '../firebase';
import {signInWithEmailAndPassword} from "firebase/auth";


function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const trackEmail = function (e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails =async function(){
       // console.log(email+""+password);
        //alert(email + "" + password);
        let userCred = await signInWithEmailAndPassword(auth,email,password);
        console.log(userCred.user);
    }


    return(
        <>
        <input type="text" onChange={trackEmail} placeholder="email"/>
        <br></br>
        <input type="text" onChange={trackPassword} placeholder="password"/>
        <br></br>
        <button value="click" onClick={printDetails}>Login</button>
        </>
    )
}

export default Login;