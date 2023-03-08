import React, { useEffect } from 'react';
import '../styles/Calendar.css';

interface CalendarProps {
    date: Date,
    days: string[],
    months: string[]
}

export const Calendar: React.FC<CalendarProps> = ({date, days, months}) => {

    useEffect(() => {
        console.log(date);
    }, [])

    return <div id="calendar" className="page">
        <div id="calendar-div">

        </div>
    </div>
}