import { MenuGuidedMeditations } from "../components/MenuGuidedMeditations";
import { Soundtracks } from "../components/Soundtracks";
import { Timer } from "../components/Timer";
import { Alert } from "../components/Alert";

export const GuidedMeditations = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      <Alert />
      <MenuGuidedMeditations />
      <Timer darkMode={darkMode} />
      <Soundtracks />
    </div>
  );
};
