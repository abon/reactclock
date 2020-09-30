import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {

    const [date, setDate] = React.useState(new Date());


    React.useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }



    return (
        <div className='home'>
            <div className='time'>It is {date.toLocaleTimeString()}.</div>
        </div>
    )
}

export default Home