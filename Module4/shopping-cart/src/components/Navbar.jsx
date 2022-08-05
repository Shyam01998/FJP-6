import {Link } from 'react-router-dom';
   
let Navbar = ()=>{
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container">
                 <Link to="/"className="navbar-brand" >V - MART</Link>
                 <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </div>
         
        </nav>
        </>
    )
}

export default Navbar