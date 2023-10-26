import { Timer } from "../components/Timer";
import { Soundtracks } from "../components/Soundtracks";
import { SetDurationButtons } from "../components/SetDurationButtons";
import { Alert } from "../components/Alert";
import { Helmet } from "react-helmet-async";

export const CustomMeditations = ({ darkMode }) => {
  return (
    <div className="flex flex-col items-center">
      <Helmet>
        <title>Custom Meditation - Awaken Mind</title>
      </Helmet>
      <Alert />
      <Timer darkMode={darkMode} />
      <SetDurationButtons />
      <Soundtracks />
    </div>
  );
};
