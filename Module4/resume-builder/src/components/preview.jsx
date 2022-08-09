import Skin1 from "./skins/skin1";
import Skin2 from "./skins/skin2"
import Skin5 from "./skins/skin5";
import { useSelector } from "react-redux";
import "./preview.css"

function Preview(){
  let state = useSelector((state)=>state);
  let contact = state.contactReducer;
  console.log("preview",contact)
    return(
      <>
            {/* <Skin1></Skin1> */}
        {/* <Skin2></Skin2> */}
        <Skin5></Skin5>

        </>
    )
}

export default Preview;