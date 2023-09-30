import { useState, useContext } from "react";
import DataContext from "../context/dataContext";
import { AudioManager } from "./AudioManager";

export const Soundtracks = () => {
  const { soundtracks } = useContext(DataContext);

  const [soundtrack, setSoundtrack] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  //creazione elementi soundtracks
  const soundtrackItems = soundtracks.map((sound) => (
    <div key={sound.id} className="flex flex-col items-center m-2 ">
      <button
        className="border-2 rounded-full p-3 border-slate-800 mb-1 hover:bg-slate-800 hover:text-amber-500 transition-colors duration-250 ease-in md:p-5 dark:border-amber-600 dark:hover:text-slate-800 dark:hover:bg-amber-500"
        onClick={() => playSoundtrack(sound.src)}
      >
        {sound.icon}
      </button>
      <p
        className={`text-lg font-semibold px-1 text-center cursor-default ${
          isPlaying && soundtrack === sound.src
            ? "border-x-2 border-slate-800 rounded dark:border-amber-600"
            : ""
        } md:text-xl`}
      >
        {sound.id}
      </p>
    </div>
  ));

  //funzione per far partire la soundtrack e fermarla
  const playSoundtrack = (sound) => {
    setSoundtrack(sound);
    if (soundtrack === sound || !isPlaying) {
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <div className="soundtracks flex flex-col justify-center mt-6">
      <div className="grid grid-rows-4 grid-cols-2 mb-3 md:grid-rows-2 md:grid-cols-4 lg:grid-rows-1 lg:grid-cols-8">
        {soundtrackItems}
      </div>
      <AudioManager
        audio={soundtrack}
        isPlaying={isPlaying}
        componentFor={"soundtrack"}
      />
    </div>
  );
};
