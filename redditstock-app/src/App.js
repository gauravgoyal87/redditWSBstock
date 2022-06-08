import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, Navigate,Router } from "react-router-dom";
import Stocks from './Component/stocks';
import Home from './Component/home';
import Cryptocurr from './Component/redditwsb';
import { useState,useEffect } from "react";
import axios from 'axios';



function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch] = useState('');
useEffect(() => {

  axios({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    method: 'get',
    mode: 'no-cors'
  })
  .then((response) => {  setCrypto(response)
    console.log(response)
    
  }) 
  .catch((error)=>{

    console.log(error)
  }) 
},[]);
const handleChange = e => {
  setSearch(e.target.value);
};

console.log(crypto)

return (
  <div className="App">
      <header className="App-header">
      
        <Link to="/">
        <h2>HOME</h2>
        </Link>
        <Link to="/cryptocurrency">

        <h2>CryptoCurrency</h2>
        </Link>
        <Link to="/stocks">
        <h2>Stocks</h2>
        </Link>
        <h1 >Search a currency</h1>
        <form>
          <input
            className='searchbar'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
       
      </header>
      <div >
     
    
    </div>
  

    <main>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cryptocurrency" element={<Cryptocurr  crypto={crypto}/>}/>
        <Route path="/stocks" element={<Stocks />}/>

      </Routes>
    </main>

  
    </div>
  );
}

export default App;
