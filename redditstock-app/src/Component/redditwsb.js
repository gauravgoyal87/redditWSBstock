import React from "react";

const redditURL = 'https://tradestie.com/api/v1/apps/reddit';

const Reddit = ((props) => {


let url = redditURL
console.log(url);
    fetch(url , {
        mode: 'no-cors',
        headers: {
            "Content-Type": "text/plain"
        }})
    .then((res) => 
   
    res.json())
    .then((res) => {
        console.log(res)})

    return(
        <div>
            <h1> Reddit</h1>
        </div>
    )
})


export default Reddit
