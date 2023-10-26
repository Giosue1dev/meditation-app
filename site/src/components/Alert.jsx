import { useContext } from "react";
import PathContext from "../context/pathContext";
import TimerContext from "../context/timerContext";

export const Alert = () => {
  const { pathName } = useContext(PathContext);
  const { alertIsVisible, setAlertIsVisible } = useContext(TimerContext);

  //to show/hide the alert
  const hideAlert = (e) => {
    setAlertIsVisible(false);
  };

  return (
    <>
      {alertIsVisible && (
        <div className="fixed z-10 mt-12 rounded-xl p-2 py-4 w-auto mx-2 text-lg bg-red-300 md:p-4 md:py-8">
          <div className="flex flex-col items-center">
            <h2 className="text-red-800 font-bold flex flex-row items-center md:text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8  mr-2 md:w-12 md:h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>

              {pathName === "/custom-meditations"
                ? "You have to set the duration for the meditation"
                : "You have to select the guided meditation"}
            </h2>
            <button
              className="border-2 rounded-xl font-semibold border-red-800 p-1 px-2 text-red-700 mt-3  hover:bg-red-400 md:text-2xl md:mt-6 md:p-2 md:px-4"
              onClick={hideAlert}
            >
              OK!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
