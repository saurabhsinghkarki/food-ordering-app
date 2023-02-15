import { useSelector } from "react-redux";
import Dishes from "./Dishes";
import "./AddedDishes.css";

const AddedDishes = ()=>{
  
   
   const items = useSelector((state)=>state.thali.items);
   console.log(items);

  
   
   return(
      <div className="addedDishes">
         {
            items.map((items)=>{
             return  <Dishes 
             key={items.id}
             id={items.id}
             dish={items.dish}
             img={items.img}
             price={items.price}
             quantity={items.quantity}
             />

            }) 
}
      </div>
   )
      
}

export default AddedDishes;