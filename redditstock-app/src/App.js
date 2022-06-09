import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, Navigate,Router } from "react-router-dom";
import CryptoPage from './Component/CryptoPage';
import Home from './Component/home';
import Cryptocurr from './Component/redditwsb';
import { useState,useEffect } from "react";
import axios from 'axios';
import singleCrypto from './Component/singleCrypto';



function App() {
  const [crypto, setCrypto] = useState([]);
  const [currency1, setCurrency1] = useState([]);
  const [search, setSearch] = useState('');
useEffect(() => {

  axios({
    url: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    method: 'get',
    mode: 'no-cors'
  })
  .then((response) => {   setCrypto(response.data);
    setCurrency1(response.data);

    
  }) 
  .catch((error)=>{
    console.log(error)
  }) 
},[]);


  const handleChange = e => {
  setSearch(e.target.value);
};



const cryptoFilter = crypto.filter(crypto =>
  crypto.id.toLowerCase().includes(search.toLowerCase())
);

return (
  <div className="App">
      <header className="App-header">
      
        <Link to="/">
          <h2>HOME</h2>
        </Link>
        
        <Link to="/cryptocurrency">
          <h2>CryptoCurrency</h2>
        </Link>

        <Link to="/CryptoPage">
          <h2>CryptoConverter</h2>
        </Link>

      </header>
      <div >
       
    </div>
  
    <main>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cryptocurrency" element={<Cryptocurr  crypto={crypto} handleChange={handleChange} cryptoFilter={cryptoFilter}/>}/>
        <Route path="/CryptoPage" element={<CryptoPage currency={currency1}/>}/>

      </Routes>
    </main> 
    </div>
  );
}

export default App;
