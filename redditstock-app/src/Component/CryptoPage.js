import React from "react";
import { useState,useEffect } from "react";




function CryptoPage(props){


const selector = props.currency.map(crypto => {
        return (
                <option value={crypto.current_price} className={crypto.name} >
                {crypto.name}
                </option>            
        )})
        
    const [chosenPrimaryCrypto, setChosenPrimaryCrypto] = useState('')
    const [chosenSecondaryCrypto, setChosenSecondaryCrypto] = useState('')
    const [amount, setAmount] = useState(1)
    const [result, setResult] = useState(0)
    function convert (event) {
    event.preventDefault();

  let change =  (amount *chosenPrimaryCrypto) /chosenSecondaryCrypto ;
        setResult(change)

        
    }

    return(
        <div>
            <h1> CryptoConverter</h1>
            <form>
          <input
            className='searchbar'
            type='text'
            onChange={(e) => setAmount(e.target.value)}
            placeholder='How many crypto?'
          />
        
             <select
                       
                   className="Crypto-options"
                   onChange={(e) => {setChosenPrimaryCrypto(e.target.value); 
                    convert(e)
                            }  }
                >
                   {selector}
            </select>

            <select      
                   onChange={(e) => {setChosenSecondaryCrypto(e.target.value); 
                    convert(e)}
                                }>
                   {selector}
          </select>
            
                     <button id="convert-button" onClick={convert}>Convert</button>
            
     </form>
                         
     <div> 
            <h3>
                 {amount} of the first coin will get you {result} of second coin
            </h3>
     </div>


     </div>
    )
}


export default CryptoPage
