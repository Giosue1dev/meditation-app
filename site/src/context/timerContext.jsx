import { createContext, useState } from "react";

const TimerContext = createContext("");

export const TimerProvider = ({ children }) => {
  const [timerDuration, setTimerDuration] = useState(0);
  const [timerValue, setTimerValue] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [alertIsVisible, setAlertIsVisible] = useState(false);

  //Sets the timer duration
  const setTimer = (value) => {
    setTimerDuration(value);
    setTimerValue(value);
    setIsRunning(false);
  };

  return (
    <TimerContext.Provider
      value={{
        timerDuration,
        timerValue,
        isRunning,
        alertIsVisible,
        setIsRunning,
        setTimerValue,
        setAlertIsVisible,
        setTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
