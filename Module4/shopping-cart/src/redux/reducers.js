

let initialState =[ {
    id:0,
    name:'IPhone',
    img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
    price:40000,
    qty:0,
},

{
    id:0,
    name:'IPhone',
    img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
    price:40000,
    qty:0,
},

{
    id:1,
    name:'HP Laptop',
    img:"https://rukminim1.flixcart.com/image/416/416/ktaeqvk0/computer/b/7/4/15s-gy0501au-thin-and-light-laptop-hp-original-imag6z6muntqnzzc.jpeg?q=70",
    price:50000,
    qty:0,
},

{
    id:2,
    name:'T-Shirt',
    img:"https://rukminim1.flixcart.com/image/128/128/kf1fo280hlty2aw-0/t-shirt/w/s/e/-original-imafdfvvr8hqdu65.jpeg?q=70",
    price:800,
    qty:0,
},
{
    id:3,
    name:'Car',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrktUEjGQqpHKSY_Y4gw9BOwSvzC9x805Bg&usqp=CAU",
    price:1000000,
    qty:0,
}

]

let reducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            let cp = state.map((el)=>el);
            let id = action.payload;
            cp[id].qty= cp[id].qty+1;
            return cp;
        case "REMOVE_FROM_CART":
            cp =state.map((el)=>el);
            id = action.payload;
            if(cp[id].qty>0)
            cp[id].qty = cp[id].qty-1;
            return cp
        default:
            return state;
    }
}

export default reducer;