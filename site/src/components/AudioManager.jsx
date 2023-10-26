import { useEffect, useRef, useState } from "react";

import { FaVolumeHigh, FaVolumeLow, FaVolumeXmark } from "react-icons/fa6";

export const AudioManager = ({ audio, isPlaying, componentFor }) => {
  const soundtrackRef = useRef();
  const [soundtrackVolume, setSoundtrackVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);

  //function to set the volume of the soundtracks
  const handleChange = (e) => {
    let volume = e.target.value;
    setSoundtrackVolume(volume);
  };
  //checks his parent component in order to display the correct text
  const componentVolumeName =
    componentFor === "soundtrack" ? "Soundtrack" : "Meditation";

  //based on the volume value displays a different icon
  const showVolumeIcon =
    soundtrackVolume >= 0.5 ? (
      <FaVolumeHigh className="ml-1 text-xl md:text-2xl md:ml-3" />
    ) : soundtrackVolume < 0.5 && soundtrackVolume > 0 ? (
      <FaVolumeLow className="ml-1 text-xl md:text-2xl md:ml-3" />
    ) : (
      <FaVolumeXmark className="ml-1 text-xl md:text-2xl md:ml-3" />
    );

  //function to show the volume bar
  const showVolumeBar = (e) => {
    e.stopPropagation();
    setShowVolume((prev) => !prev);
  };

  //handles the updates of state relative to the soundtracks
  useEffect(() => {
    const audioElement = soundtrackRef.current;
    if (isPlaying) {
      audioElement.play();
      audioElement.volume = soundtrackVolume;
    } else if (!isPlaying) {
      audioElement.pause();
    }
  }, [audio, isPlaying, soundtrackVolume]);

  return (
    <>
      <audio ref={soundtrackRef} src={audio} loop></audio>
      <div
        className={`flex ${
          componentFor === "soundtrack" ? "flex-row md:ml-[5%]" : "flex-col"
        } items-center mb-3 `}
        onMouseOver={showVolumeBar}
        onMouseOut={showVolumeBar}
      >
        <h3
          className={`flex flex-row items-center text-lg md:text-xl cursor-default`}
        >
          {componentVolumeName} Volume {showVolumeIcon}
        </h3>
        {showVolume && (
          <input
            className={`ml-2 w-[42%] h-2 outline-none appearance-none rounded-2xl bg-slate-500 
            ${componentFor !== "soundtrack" && "mt-2"}    
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:bg-slate-800
            [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:rounded-full
            md:w-56
            hover:[&::-webkit-slider-thumb]:bg-slate-900
            dark:bg-slate-400
            dark:[&::-webkit-slider-thumb]:bg-amber-600
            dark:hover:[&::-webkit-slider-thumb]:bg-amber-700
            `}
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={soundtrackVolume}
            onChange={handleChange}
          ></input>
        )}
      </div>
    </>
  );
};
