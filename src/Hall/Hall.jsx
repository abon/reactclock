import React from 'react'
import Home from '../Home/Home'
import './Hall.css'

import clock from '../clock.svg'

function Hall() {
    let i = 0;
    function change() {
        var doc = document.getElementById("background");
        var color = ["DEEPPINK", 'TOMATO', 'ORANGE', 'INDIGO', 'MEDIUMSPRINGGREEN', 'DARKGREEN', 'MEDIUMAQUAMARINE', 'DARKSLATEGRAY'];
        doc.style.backgroundColor = color[i];
        i = (i + 1) % color.length;
    }
    setInterval(change, 4000);
    return (
        <div className='hall'>

            <div id="background">   <img className='clock' src={clock} alt="" /><Home /></div>
        </div>
    )
}

export default Hall
