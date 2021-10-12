
import './App.css';
import Header from "./Components/Header/Header";
import Des from "./Components/Des/Des";
import Content from "./Components/Content/Content";
import Data from "./Data/User";
import { useEffect, useState } from 'react';



function App() {

const [users, setUsers] = useState([]);

useEffect(()=>{
  return setUsers(Data)
},[])

const [hires , setHired] = useState([]);

const totalCart = (props) =>{
  const newAdd = [...hires, props];
  setHired(newAdd);
}

const totalCost = hires.reduce( (sum, hires) => {
  let number = hires.balance.substring(1);
  return parseFloat(sum)+parseFloat(number);
}, 0);

return (
    <div>
        <Header length={users.length}></Header>
        <Des total={totalCost} person={hires.length}></Des>

        <div className="hired">
          <span>Hired Members : </span>
          {hires.map( hire => <a className="hire_btn" href={'#'+hire.index} key={hire._id}>{hire.name}</a>)}
        </div>
        {users.map( user => <Content user={user} key={user._id} totalCart={totalCart}></Content>)}
    </div>
  );
}

export default App;
