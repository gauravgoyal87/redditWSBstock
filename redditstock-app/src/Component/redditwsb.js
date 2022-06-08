import React from "react";
// import data from './Cryptocurrdata.json'
import axios from "axios";
import { useState,useEffect } from "react";
import "./redditwsb.css"


const Cryptocurr = ((props) => {
    let cryptoC = props.crypto.data

console.log(cryptoC)
let blub = cryptoC.map(crypto => {
    return (
    
      
          <div className='crypto-container'>
            <div className='crypto-row'>
              <div className='crypto'>
                <img src={crypto.image} alt='crypto' className="coinImage"/>
                <h1>{crypto.name}</h1>
                <p className='crypto-symbol'>{crypto.symbol}</p>
              </div>
              <div className='crypto-data'>
                <p className='crypto-price'>${crypto.current_price}</p>
             
             </div>
             </div>
           </div>
        )
      }
    )
  
//     // console.log(data)
  
    return(
        <div>
            <h1> CryptocurrENCY</h1>
            {blub}
            
        
        </div>
    )
})


export default Cryptocurr
