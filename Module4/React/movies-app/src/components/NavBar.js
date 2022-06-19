import { Component } from "react";

class NavBar extends Component{
    render(){
        return(
            <div style ={{display : "flex" , padding: '0.5rem'}}>
                <h1>Movie App</h1>
                <h2 style={{ marginLeft: '2rem', marginTop: '0.5rem' }}> Favourite</h2>
                
            </div>
        )
    }
}



export default NavBar;