import "./header.css"
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { logOutCreator } from "../redux/action";

const Header= ()=>{
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    let auth = state.authReducer;

    console.log(state);

    const logout = ()=>{
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(logOutCreator());
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });


    }
    console.log(auth);
    return (
        <>
        <div className="header">
            <div className="header-logo">
                <Link to="/"> <img src="data:image/png;base64,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" alt="Image not available" /> </Link>
            </div>
            <div className="header-links">
                {auth.isAuth?<ul>
                    <li><Link to="/template">Resume Templates</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/" onClick={logout}>Log out</Link></li>
                </ul>:
                <ul>
                <li><Link to="/template">Resume Templates</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/register"><button className="btn">Register</button></Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>}
            </div>
        </div>
        </>
    )
}

export default Header