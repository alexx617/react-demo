import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './HeaderApp.scss'

const HeaderApp = ({logo,listOptions})=>{
    return(
        <div className="header">
            <img className="img" src={logo}/>

            <ul className="menulist">
                {listOptions.map((item,i)=>{
                    return(
                        <li key={i}>
                            <p to={item.text.toLowerCase()}>{item.text}</p>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
export default HeaderApp;