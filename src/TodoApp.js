import React, { useState ,useEffect } from 'react';

const TodoApp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const secondsRotation = ((time.getSeconds() / 60) * 360) - 90;
  const minutesRotation = ((time.getMinutes() / 60) * 360) - 90;
  const hoursRotation = ((time.getHours() / 12) * 360) - 90;

  return (
    <div className="circle-clock">
      <div className="clock">
        <div className="hand seconds-hand" style={{ transform: `rotate(${secondsRotation}deg)` }}></div>
        <div className="hand minutes-hand" style={{ transform: `rotate(${minutesRotation}deg)` }}></div>
        <div className="hand hours-hand" style={{ transform: `rotate(${hoursRotation}deg)` }}></div>
        <div className="center-dot"></div>
      </div>
      <div className="time">{formatTime(time)}</div>
    </div>
  );
};


export default TodoApp;
