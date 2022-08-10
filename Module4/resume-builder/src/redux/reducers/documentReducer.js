import initialState from "./initialState.json"
import * as actionTypes from "../action.js"

export default function documentReducer(state = initialState.document,action){
        switch(action.type){
            case "SET_SKIN":
                return{
                    ...state,
                    skinCd:action.document
                }
           
                default:
                    return state;
        }
}