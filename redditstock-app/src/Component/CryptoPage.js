import React from "react";



function CryptoPage(props){

    console.log(props.currency)
let selector = props.currency.map(crypto => {
        return (
            <div>
                {crypto.name}

            </div>
        )})
//     const [chosenPrimaryCrypto, setChosenPrimaryCrypto] = useState('')
//     const [chosenSecondaryCrypto, setChosenSecondaryCrypto] = useState('')
//     const [amount, setAmount] = useState(1)

//     const [result, setResult] = useState(0)

//     console.log(exchangedData)

//     const convert = () => {
    
//     let trade =  chosenPrimaryCryptoprice /chosenSecondaryCryptoprice ;
//     setResult(trade)
//     }
//     return (
//         <div className="Crypto-converter">
//             <h2>Crypto Converter</h2>

//             <div className="input-box">

//                 <table>
//                     <tbody>
//                     <tr>
//                         <td>Primary Crypto:</td>
//                         <td>
//                             <input
//                                 type="number"
//                                 name="Crypto-amount-1"
//                                 value= ''
//                                 onChange={(e) => setAmount(e.target.value)}
//                             />
//                         </td>
//                         <td>
//                             <select
//                                 value={chosenPrimaryCrypto}
//                                 name="Crypto-option-1"
//                                 className="Crypto-options"
//                                 onChange={(e) => setChosenPrimaryCrypto(e.target.value)}
//                             >
//                                 {props.currency.name.map((Name, ) => (<option key={_index}>{Crypto}</option>))}
//                             </select>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>Secondary Crypto:</td>
//                         <td>
//                             <input
//                                 name="Crypto-amount-2"
//                                 value={result}
//                                 disabled={true}
//                             />
//                         </td>
//                         <td>
//                             <select
//                                 value={chosenSecondaryCrypto}
//                                 name="Crypto-option-2"
//                                 className="Crypto-options"
//                                 onChange={(e) => setChosenSecondaryCrypto(e.target.value)}
//                             >
//                                 {currencies.map((Crypto, _index) => (<option key={_index}>{Crypto}</option>))}
//                             </select>
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>

//                 <button id="convert-button" onClick={convert}>Convert</button>


//             </div>


        
//         </div>
//     )
// }

    return(
        <div>
            <h1> CryptoPage</h1>
            {selector}
        </div>
    )
}


export default CryptoPage
