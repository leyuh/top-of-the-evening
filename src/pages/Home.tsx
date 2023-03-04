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

    // SET GREETING EVERY SOME HOURS
    useEffect(() => {
        let hour: number = date.getHours();
        let msg: string = "Top of the ";

        if (hour > 0 && hour < 12) {
            msg += "Morning";
        } else if (hour < 5) {
            msg += "Afternoon";
        } else if (hour < 9) {
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
                <div id="temp-label">-&deg;</div>
                <div id="greeting-label">{`${greeting}, Claire.`}</div>
                <div id="time-label">{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</div>
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