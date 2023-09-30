import { useContext, useState } from "react";
import TimerContext from "../context/timerContext";
import DataContext from "../context/dataContext";

export const SetDurationButtons = () => {
  const { timePresets } = useContext(DataContext);
  const { setTimer } = useContext(TimerContext);
  const [customDuration, setCustomDuration] = useState("");

  //gestione onChange per input
  const handleChange = (e) => {
    let value = e.target.value;
    let reg = /^[0-9]+$/;
    if (reg.test(value) || value === "") {
      let intValue = parseInt(value);
      setCustomDuration(value);
    }
  };

  //gestione Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customDuration != "" && customDuration <= 180) {
      setTimer(customDuration * 60);
    }
  };

  //creazione pulsanti per preset durata
  const timePresetsElements = timePresets.map((preset) => {
    return (
      <button
        className="text-lg buttons-meditation md:text-xl"
        value={preset.value}
        key={preset.id}
        onClick={() => setTimer(preset.value)}
      >
        {preset.id}
      </button>
    );
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mb-3 mx-2 md:gap-9 md:mb-6">
        {timePresetsElements}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center text-lg mx-2 md:text-2xl"
      >
        <label className="mr-1 md:mr-4" htmlFor="duration-amount">
          Minutes:{" "}
        </label>
        <input
          className="text-center bg-yellow-400 autofill-bg-color border-b-2 border-slate-800 outline-none focus:border-b-slate-600 transition-color duration-150 ease-in placeholder:text-slate-600 dark:bg-slate-900 dark:text-amber-500 dark:border-amber-600 dark:focus:border-amber-400 dark:placeholder:text-amber-400/50"
          type="text"
          name="duration-amount"
          id="duration-amount"
          placeholder="Type in desired duration"
          value={customDuration}
          onChange={handleChange}
        ></input>
        <button className="ml-2 buttons-meditation md:ml-6" type="submit">
          Set
        </button>
      </form>
    </div>
  );
};
