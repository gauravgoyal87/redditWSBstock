import React from "react";
// import data from './Cryptocurrdata.json'
import axios from "axios";
import { useState,useEffect } from "react";
import "./redditwsb.css"


const Cryptocurr = ((props) => {
    let cryptoC = props.crypto


let blub = props.cryptoFilter.map(crypto => {
    return (
    
      
          <div className='container'>
            <div className='box'>
              <div className='crypto'>
                <img src={crypto.image} alt='crypto' className="coinImage"/>
                <h1>{crypto.name}</h1>
                <p className='crypto-symbol'>{crypto.symbol}</p>
              </div>
              <div className='crypto-data'>
                <p className='crypto-price'>${crypto.current_price}</p>
                <p className='crypto-pricechange'> Price Change: {crypto.price_change_24h}</p>
             
             </div>
             </div>
           </div>
        )
      }
    )
  
//     // console.log(data)
  
    return(
        <div>
            <h1> Cryptocurrency</h1>
   
        <form>
          <input
            type='text'
            onChange={props.handleChange}
            placeholder='Enter Cryptocurrency'
          />
        
        </form>
            <div className="cards">
            {blub}
            </div>
            
        
        </div>
    )
})


export default Cryptocurr
