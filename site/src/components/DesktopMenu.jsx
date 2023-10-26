import { useContext } from "react";
import PathContext from "../context/pathContext";

export const DesktopMenu = ({ linkPresets, setTimer }) => {
  const { pathName } = useContext(PathContext);

  return (
    <div
      className="hidden lg:block "
      onClick={() => {
        setTimer(0);
      }}
    >
      {pathName === "/custom-meditations"
        ? linkPresets.customMed
        : pathName === "/guided-meditations"
        ? linkPresets.guidedMed
        : pathName === "/first-steps"
        ? linkPresets.firstSteps
        : ""}
    </div>
  );
};
