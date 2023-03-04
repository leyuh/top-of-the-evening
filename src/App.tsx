import React, { useState, useEffect, useRef } from 'react';

import './styles/App.css';

import { Home } from "./pages/Home";
import { Calendar } from "./pages/Calendar";
import { Goals } from "./pages/Goals";
import { Workout } from "./pages/Workout";
import { Logs } from "./pages/Logs";

function App() {

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [date, setDate] = useState<Date>(new Date());


  // SET TIME EVERY SECOND
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="app">
      <Home
        date={date}
        days={daysOfWeek}
        months={months}
      />
    </div>
  );
}

export default App;
