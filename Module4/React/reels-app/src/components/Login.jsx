import {useEffect, useState } from "react";
import  auth from '../firebase';
import {signInWithEmailAndPassword, signOut,onAuthStateChanged} from "firebase/auth";


function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState(null);
    const [loader,setLoader]= useState(false);
    const [error,setError]= useState("");
    const [mainLoader,setMainLoader] = useState(true);

    const trackEmail = function (e){
        setEmail(e.target.value);
    }

    const trackPassword = function(e){
        setPassword(e.target.value);
    }

    const printDetails =async function(){
       // console.log(email+""+password);
        //alert(email + "" + password);
        try{
        setLoader(true)
        let userCred = await signInWithEmailAndPassword(auth,email,password);
        setUser(userCred.user);
        }catch(err){
            setError(err.message);
            setTimeout(()=>{
                setError("");
            },2000)
        }
        setLoader(false);
    }

    const logOut = async function(){
        await signOut(auth);
        setUser(null);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              //const uid = user.uid;
              setUser(user);
              // ...
              
            } else {
              // User is signed out
              // ...
              setUser(null);
            }
            setMainLoader(false);
        })
    },[])

    return(
        <>
        {mainLoader == true? <h1>Page is Loading</h1>:
            error != "" ? <h1>Error is {error}</h1>:
              loader == true ?<h1>...Loading</h1>:
                 user != null ? <><h1>User is {user.uid}</h1><button onClick={logOut}>Log out</button></>:
            <><input type="text" onChange={trackEmail} placeholder="email"/>
               <br></br>
              <input type="text" onChange={trackPassword} placeholder="password"/>
                <br></br>
              <button value="click" onClick={printDetails}>Login</button></>
         }
         </>
    )
}

export default Login;