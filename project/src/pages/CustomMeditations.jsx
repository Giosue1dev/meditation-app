import { Timer } from "../components/Timer";
import { Soundtracks } from "../components/Soundtracks";
import { SetDurationButtons } from "../components/SetDurationButtons";
import { Alert } from "../components/Alert";

export const CustomMeditations = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      <Alert />
      <Timer darkMode={darkMode} />
      <SetDurationButtons />
      <Soundtracks />
    </div>
  );
};
