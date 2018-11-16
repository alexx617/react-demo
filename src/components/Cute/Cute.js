import React, { Component } from 'react'

const Cute = ({ cuteurl, changeImg}) => {
    let showImg = false
    if(typeof cuteurl==='string'){
        showImg = true
    }
    return (
        <div>
            {
                showImg ? <img src={cuteurl} /> : <p>{cuteurl}</p>
            }
            <button onClick={changeImg}>change</button>
        </div>
    )
}
export default Cute