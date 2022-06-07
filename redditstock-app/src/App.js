import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, Navigate,Router } from "react-router-dom";
import Stocks from './Component/stocks';
import Home from './Component/home';
import Cryptocurr from './Component/redditwsb';
import { useState,useEffect } from "react";
import axios from 'axios';



function App() {
  const [crypto, setCrypto] = useState([])
  const [search, setSearch] = useState('');
useEffect(() => {

  axios({
    url: 'https://api.Cryptocurrgecko.com/api/v3/Cryptocurrs/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    method: 'get',
    mode: 'no-cors'
  })
  .then((response) => {
      // code for if the request succeeds
    setCrypto(response.data.data)
    console.log(crypto)
    }) 
  .catch((error)=>{
      // code for if the request fails
      console.log(error)
  }) 
},[])
const handleChange = e => {
  setSearch(e.target.value);
};

const filteredCrypto = crypto.filter(currency =>
  currency.name.toLowerCase().includes(search.toLowerCase())
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
        <Link to="/stocks">
        <h2>Stocks</h2>
        </Link>
        <h1 className='Cryptocurr-text'>Search a currency</h1>
        <form>
          <input
            className='Cryptocurr-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
       
      </header>
      <div className='Cryptocurr-app'>
      <div className='Cryptocurr-search'>
      
      </div>
      {filteredCrypto.map(Cryptocurr => {
        return (
          <Cryptocurr
            key={Cryptocurr.id}
            name={Cryptocurr.name}
            price={Cryptocurr.current_price}
            symbol={Cryptocurr.symbol}
            marketcap={Cryptocurr.total_volume}
            volume={Cryptocurr.market_cap}
            image={Cryptocurr.image}
            priceChange={Cryptocurr.price_change_percentage_24h}
          />
        );
      })}
    </div>
  

    <main>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cryptocurrency" element={<Cryptocurr />}/>
        <Route path="/stocks" element={<Stocks />}/>

      </Routes>
    </main>

  
    </div>
  );
}

export default App;
