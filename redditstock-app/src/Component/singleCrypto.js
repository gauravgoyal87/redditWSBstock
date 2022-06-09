import React from "react";


const singleCrypto =(props)=>{
let crypto = props.crypto2
    return(

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

export default singleCrypto