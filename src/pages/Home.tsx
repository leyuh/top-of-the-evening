import React, { useState, useEffect } from 'react';

import "../styles/Home.css";

import roadster from '../images/2008.png';

interface HomeProps {
    date: Date,
    days: string[],
    months: string[]
}

export const Home: React.FC<HomeProps> = ({date, days, months}) => {

    const [greeting, setGreeting] = useState<string>("");
    const [temp, setTemp] = useState<number>(0);

    const lat = 44.3934571;
    const lon = -122.9848108;

    // weather 
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f7f7507e7bf9e80bf58e8ecee909628`)
            .then((response) => response.json())
            .then((data) => {
                let k: number = Number(data.main.temp);
                let f: number = (k - 273.15) * 9/5 + 32;
                setTemp(Number(f.toPrecision(3)));
            });
    }, [])

    // SET GREETING EVERY SOME HOURS
    useEffect(() => {
        let hour: number = date.getHours();
        console.log(hour);
        let msg: string = "Top of the ";

        if (hour > 0 && hour < 12) {
            msg += "Morning";
        } else if (hour < 17) {
            msg += "Afternoon";
        } else if (hour < 21) {
            msg += "Evening";
        } else {
            msg += "Night";
        }

        setGreeting(msg);
    }, [date.getHours()])
    
    return <div id="home" className="page">
        <img id="home-bg" src={roadster}/>

        <div id="home-main-div">
            <div id="home-welcome-div">
                <div id="date-label">{`${(days[date.getDay()]).toUpperCase()} | ${(months[date.getMonth()]).toUpperCase()} ${date.getDate()}`}</div>
                <div id="temp-label">{temp}&deg;</div>
                <div id="greeting-label">{`${greeting}, Claire.`}</div>
                <div id="time-label">{`${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`}</div>
            </div>

            <div id="home-panels-div">
                <div id="events-div">

                </div>
                <div id="extras-div">

                </div>
                <div id="goals-div">

                </div>
            </div>
        </div>
    </div>
}