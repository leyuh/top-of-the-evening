import React from 'react';
import { Link } from 'react-router-dom';

interface HNavBarProps {
    
}

export const HNavBar: React.FC<HNavBarProps> = ({}) => {
    return <div id="h-nav-bar">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/goals">Goals</Link></li>
            <li><Link to="/workouts">Workouts</Link></li>
            <li><Link to="/logs">Logs</Link></li>
        </ul>
    </div>
}