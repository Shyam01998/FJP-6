import "./header.css"
import {Link} from 'react-router-dom'

const Header= ()=>{
    return (
        <>
        <div className="header">
            <div className="header-logo">
                <Link to="/"> <img src="Module4\resume-builder\src\static\images\logo.png" alt="Image not available" /> </Link>
            </div>
            <div className="header-links">
                <ul>
                    <li><Link to="/template">Resume Templates</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/register"><button className="btn">Register</button></Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header