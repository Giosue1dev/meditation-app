import React, { useState, useEffect } from 'react';

function MeditationTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setIsBreak(false);
  };

  const incrementMinutes = () => {
    if (minutes < 60 && !isActive) {
      setMinutes(minutes + 1);
    }
  };

  const decrementMinutes = () => {
    if (minutes > 0 && !isActive) {
      setMinutes(minutes - 1);
    }
  };

  const incrementSeconds = () => {
    if (seconds < 59 && !isActive) {
      setSeconds(seconds + 1);
    }
  };

  const decrementSeconds = () => {
    if (seconds > 0 && !isActive) {
      setSeconds(seconds - 1);
    }
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            if (isBreak) {
              setMinutes(25);
              setIsBreak(false);
            } else {
              setMinutes(5);
              setIsBreak(true);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);

  const percentage = ((minutes * 60 + seconds) / (25 * 60)) * 100;

  return (
    <div className={`pomodoro-timer ${isActive ? 'active' : ''}`}>
      <div>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <div className="timer-progress">
        <div style={{ width: `${percentage}%` }} className="progress-bar"></div>
      </div>
      <div>
        <button onClick={incrementMinutes}>+1 Min</button>
        <button onClick={decrementMinutes}>-1 Min</button>
        <button onClick={incrementSeconds}>+1 Sec</button>
        <button onClick={decrementSeconds}>-1 Sec</button>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default MeditationTimer;