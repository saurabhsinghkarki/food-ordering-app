import "./ChooseDishes.css";
import { useDispatch , useSelector } from "react-redux";
import { thaliActions } from "../store/store";
import { useState } from "react";


const ChooseDishes = ()=>{
   const [isAddCDisabled, setAddCDisabled] = useState(false);
   const [isAddPickleDisabled, setAddPickleDisabled] = useState(false);
   const [isAddCurdDisabled, setAddCurdDisabled] = useState(false);
   const [isAddPaneerDisabled, setAddPaneerDisabled] = useState(false);
   const [isAddDaalDisabled, setAddDaalDisabled] = useState(false);
   const [isAddGulabDisabled, setAddGulabDisabled] = useState(false);


   const dispatch = useDispatch();
   const items = useSelector((state)=>state.thali.items);
   console.log(items);
   const addChapati = ()=>{
   const chapati = {
      id:"chapati",
      dish:"chapati",
      img: "https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900",
      price:10,
      quantity:1,
   }
   dispatch(thaliActions.addItemHandler(chapati));
   setAddCDisabled(true);
   }

   const removeChapati= ()=>{
   dispatch(thaliActions.removeItem("chapati"));
   setAddCDisabled(false);
   }

   const addPickle = ()=>{
      const pickle = {
         id:"pickle",
         dish:"pickle",
         img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/mango-pickle-recipe.jpg",
         price:10,
         quantity:1
      }
   dispatch(thaliActions.addItemHandler(pickle));
   setAddPickleDisabled(true);
   }
   const removePickle= ()=>{
      dispatch(thaliActions.removeItem("pickle"));
      setAddPickleDisabled(false)
      }

   const addCurd = ()=>{
      const curd = {
         id:"curd",
         dish:"Curd",
         img:"https://i0.wp.com/www.geetascuisine.com/wp-content/uploads/2014/11/Home-Made-Curd-Yogurt_.jpg_.jpg?fit=640%2C427",
         price:10,
         quantity:1
      }
   dispatch(thaliActions.addItemHandler(curd));
   setAddCurdDisabled(true);
   }

   const removeCurd= ()=>{
      dispatch(thaliActions.removeItem("curd"));
   setAddCurdDisabled(false);
      }
   
   const addDaal = ()=>{
      const daal = {
         id:"daal",
         dish:"daal",
         img:"https://img.freepik.com/premium-photo/healthy-dal-palak-yellow-toor-spinach-daal-recipe-also-known-as-patal-bhaji-india-served-bowl_466689-18969.jpg?w=2000",
         price:10,
         quantity:1
      }
   dispatch(thaliActions.addItemHandler(daal));
   setAddDaalDisabled(true);
   }

   const removeDaal= ()=>{
      dispatch(thaliActions.removeItem("daal"));
   setAddDaalDisabled(false);
       }

   const addPaneer = ()=>{
      const paneer = {
         id:"paneer",
         dish:"paneer",
         img:"https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES.jpeg",
         price:10,
         quantity:1
      }
   dispatch(thaliActions.addItemHandler(paneer));
   setAddPaneerDisabled(true);
   }

   const removePaneer= ()=>{
      dispatch(thaliActions.removeItem("paneer"));
   setAddPaneerDisabled(false);

      }

   const addGulabJamun = ()=>{

      const gulabJamun = {
         id:"gulabJamun",
         dish:"gulabJamun",
         img:"https://tajsweetsandnamkeen.com/wp-content/uploads/2021/05/gulab-jamun.jpg",
         price:10,
         quantity:1
      }
   dispatch(thaliActions.addItemHandler(gulabJamun));
   setAddGulabDisabled(true);
   }

   const removeGulabJamun= ()=>{
      dispatch(thaliActions.removeItem("gulabJamun"));
   setAddGulabDisabled(false);

      }
   
return(<div className="main">
   <div className="section chapati">
      <img className="img" src="https://static.toiimg.com/thumb/61203720.cms?width=1200&height=900" alt="Chapati"/>
      <p>Chapati</p>
      <button onClick={removeChapati} >-</button>
      <button onClick={addChapati} disabled={isAddCDisabled}>+</button>
   </div>
   <div className="section pickle">
      <img className="img" src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/mango-pickle-recipe.jpg" alt="Pickle"/>
      <p>Pickle</p>
      <button onClick={removePickle} >-</button>
      <button onClick={addPickle}  disabled={isAddPickleDisabled}>+</button>
   </div>
   <div className="section curd">
      <img className="img" src="https://i0.wp.com/www.geetascuisine.com/wp-content/uploads/2014/11/Home-Made-Curd-Yogurt_.jpg_.jpg?fit=640%2C427" alt="Curd"/>
      <p>Curd</p>
      <button onClick={removeCurd} >-</button>
      <button onClick={addCurd}  disabled={isAddCurdDisabled}>+</button>
   </div>
   <div className="section daal">
      <img className="img" src="https://img.freepik.com/premium-photo/healthy-dal-palak-yellow-toor-spinach-daal-recipe-also-known-as-patal-bhaji-india-served-bowl_466689-18969.jpg?w=2000" alt="Daal"/>
      <p>Daal</p>
      <button onClick={removeDaal}>-</button>
      <button onClick={addDaal} disabled={isAddDaalDisabled}>+</button>
   </div>
   <div className="section paneer">
      <img className="img" src="https://www.eitanbernath.com/wp-content/uploads/2020/05/Butter-Paneer-1-4x5-LOW-RES.jpeg" alt="Paneer"/>
      <p>Paneer</p>
      <button onClick={removePaneer}>-</button>
      <button onClick={addPaneer} disabled={isAddPaneerDisabled}>+</button>
   </div>
   <div className="section gulabJamun">
      <img className="img" src="https://tajsweetsandnamkeen.com/wp-content/uploads/2021/05/gulab-jamun.jpg" alt="Gulab Jamun"/>
      <p>Gulab Jamun</p>
      <button onClick={removeGulabJamun}>-</button>
      <button onClick={addGulabJamun} disabled={isAddGulabDisabled}>+</button>
   </div>
</div>)
}

export default ChooseDishes;