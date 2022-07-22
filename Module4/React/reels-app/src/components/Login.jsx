import { useState } from "react";


function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const trackEmail = function (e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails = function(){
       // console.log(email+""+password);
        alert(email + "" + password);
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