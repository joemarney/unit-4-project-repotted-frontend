import { useState, useEffect } from "react";

export default function Countdown({ plant }) {
  const [days, setDays] = useState(setState());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);

  function setState() {
    if (plant.watering === "low") {
      return 14;
    } else if (plant.watering === "moderate") {
      return 7;
    } else if (plant.watering === "high") {
      return 5;
    }
  }

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (days > 0) {
          setDays((days) => days - 1);
          setHours(23);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, days, isRunning]);

  function startTimer() {
    if (days !== 0 || hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
    } else {
      window.alert("add time");
    }
  }

  function changeHours(e) {
    setHours(e.target.value);
  }
  function changeDays(e) {
    setDays(e.target.value);
  }

  return (
    <main>
      <div>
        <label>dd</label>
        <input value={days} onChange={changeDays} />
      </div>
      <div>
        <label>hh</label>
        <input value={hours} onChange={changeHours} />
      </div>
      <div id="button-container">
        <button onClick={startTimer}>Watered</button>
      </div>
    </main>
  );
}
