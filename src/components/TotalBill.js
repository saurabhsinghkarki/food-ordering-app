import { useSelector } from "react-redux";
import "./TotalBill.css";

const TotalBill = ()=>{
   const totalBill = useSelector((state)=>state.thali.totalBill);
   console.log(totalBill);
   const total = totalBill.reduce((pre , cur) => pre+cur , 0)

   const orderConfirmHandler = ()=>{
      if(total > 0){
alert("Order Confirmed...Thank You!")}
else{
   alert("Order Something First")
}
   }

   return(
      <div className="totalBillDiv">
      <p className="totalBill"> TotalBill:{total}</p> 
      <button onClick={orderConfirmHandler}>confirm order</button>
      </div>
   )
   
}

export default TotalBill;