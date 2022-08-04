import {Link} from 'react-router-dom';

let Navbar = ()=>{
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div class="container">
                 <Link to="/"className="navbar-brand">V - MART</Link>
        </div>
         
        </nav>
        </>
    )
}

export default Navbar