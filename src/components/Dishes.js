import { useState } from "react";
import { useDispatch } from "react-redux";
import { thaliActions } from "../store/store";
import "./Dishes.css";

const Dishes = (props)=>{

const [value , setValue] = useState("");
const [update , setUpdate] = useState(0);
const [disabled , setDisabled] = useState(false);
const dispatch = useDispatch();



const totalBillHandler =()=>{
   dispatch(thaliActions.totalBill(
     props.price * (props.quantity + +update)
   ))
setDisabled(true);
}



const handleChange =(event)=>{
setValue(event.target.value);
}

const onAddHandler = ()=>{
   if(value >= 0){
   setUpdate(update + (Math.floor(+value)));
   setValue("");
   }
   else{
      alert("Enter Valid Quantity")
   }
}
const onSubHandler = ()=>{
   if((props.quantity + +update) > value){
setUpdate(update - (Math.floor(+value)))
setValue("");
   }
   else{
      alert("Enter Valid Quantity!")
   }
}


return(
   <div className="main-dish">
      <p className="dishName">{props.dish}</p>
      <img src={props.img} alt="dishes" className="dishImg"/>
      <p className="dishPrice">Price : {props.price} , Quantity: {props.quantity + +update}</p>
      <p className="totalQuantity">Total price = {props.price * (props.quantity + +update)}</p>
      <input type="number" onChange={handleChange} value={value}/>
      <button onClick={onAddHandler} >Add Quantity</button>
      <button onClick={onSubHandler} >Sub Quantity</button>
      <button onClick={totalBillHandler} disabled={disabled}>Confirmed</button>
      <p className="note">once Clicked on Confirmed your order will be confirmed! 
      only click it once after adding the final Quantity
      </p>
   </div>
)
}
export default Dishes;