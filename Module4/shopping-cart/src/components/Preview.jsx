import "./Preview.css";
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import { addCreator } from "../redux/actions";


let Preview=(props)=>{
    let {id} = useParams();
    let state = useSelector((state)=>state);
    let reqObject =state[id];
    let dispatch = useDispatch();
    return(
        <>
        <div className="preview-container">
            <div className="preview-img-container">
                 <img src={reqObject.img} alt="Image not available"/>
             </div>
            <div className="preview-listing">
                <h2>{reqObject.name}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nisi tenetur sapiente explicabo alias possimus deserunt quae molestiae beatae dicta optio suscipit quam repellat nam soluta dignissimos ipsam, consectetur at doloremque earum eos ducimus eveniet. Nesciunt similique ipsum aspernatur natus.</p>
                <button
                onClick={()=>{
                    dispatch(addCreator(id))
                    alert("Added to cart!!")
                }}>Add to Cart</button>
            </div>
        </div>
        </>
    )
}
export default Preview;