import './App.css';
import ChooseDishes from './components/ChooseDishes';
import AddedDishes from './components/AddedDishes';
import TotalBill from './components/TotalBill';

function App() {
  return (
    <div className='app'>
     <ChooseDishes/>
     <AddedDishes/>
     <TotalBill/>
    </div>
  );
}

export default App;
