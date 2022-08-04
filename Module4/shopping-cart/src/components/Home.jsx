import Product from "./Product";
import "./Home.css";
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router'

let Home = () => {
    let state = useSelector ((state)=>state)
    let history = useHistory();
  return (
     <>
      <div className="product-container">
        {state.map((el,index)=>(
           <Product key={index} data={el}/>
        ))}
       
      </div>
      <button onClick={()=>{
        history.push('/cart')
      }}  className="shopping-cart-home">
        <span class="material-symbols-outlined">shopping_cart</span>
      </button>
    </>
  );
};

export default Home;
