import React from 'react';
import { Link } from 'react-router-dom';

import './styles/HNavBar.css';

interface HNavBarProps {
    
}

export const HNavBar: React.FC<HNavBarProps> = ({}) => {
    return <div id="h-nav-bar">
        <ul>
            <li><Link to="/logs">LOGS</Link></li>
            <li><Link to="/workout">WORKOUTS</Link></li>
            <li><Link to="/goals">GOALS</Link></li>
            <li><Link to="/calendar">CALENDAR</Link></li>
            <li><Link to="/">HOME</Link></li>
        </ul>
    </div>
}