import { useState, useContext } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { nanoid } from "nanoid";

import DataContext from "../context/dataContext";

export const FirstSteps = () => {
  const { questions } = useContext(DataContext);

  const [isOpen, setIsOpen] = useState({
    whatIs: false,
    benefits: false,
    gettingStarted: false,
    types: false,
    wanderingMind: false,
  });

  const [prevOpen, setPrevOpen] = useState("");

  //funzione per generare le card con le domande che al click mostrano la risposta
  const questionElements = questions.map((question) => (
    <div
      key={question.id}
      className="mt-8 mb-3 mx-3 border-b-2 border-slate-800/75 dark:border-amber-600/75"
    >
      <div
        className="flex flex-row items-center justify-start cursor-pointer"
        id={question.id}
      >
        <h3 className=" text-xl md:text-2xl">{question.title}</h3>
        {isOpen[question.id] ? (
          <FaCaretUp id={question.id} className="ml-auto" />
        ) : (
          <FaCaretDown id={question.id} className="ml-auto" />
        )}
      </div>
      {isOpen[question.id] && (
        <div
          id={`${question.id} answerBody `}
          className="px-2 py-4 text-lg md:text-xl"
        >
          <p>{question.answerIntro}</p>
          {question.bulletList && (
            <ul
              id={`${question.id} answerBody`}
              className="list-inside list-disc"
            >
              {question.bulletList.map((bulletPoint) => (
                <li key={nanoid()}>{bulletPoint}</li>
              ))}
            </ul>
          )}
          {question.answerOutro && <p>{question.answerOutro}</p>}
        </div>
      )}
    </div>
  ));

  //funzione per mostrare la risposta e nascondere quella della domanda precedente
  const showAnswer = (e) => {
    let section =
      e.target.tagName === "DIV" ? e.target.id : e.target.parentElement.id;
    //la condizione controlla che prevOpen non sia vuota oppure uguale a section
    //e fa in modo che se avviene un clicci nella risposta uesta non venga chiusa
    if (!section.includes("answerBody")) {
      if (prevOpen != "" && prevOpen !== section) {
        setIsOpen((prev) => ({
          ...prev,
          [section]: !prev[section],
          [prevOpen]: false,
        }));
        setPrevOpen(section);
      } else {
        setIsOpen((prev) => ({
          ...prev,
          [section]: !prev[section],
        }));
        setPrevOpen(section);
      }
    }
  };

  return (
    <div className="h-auto " onClick={showAnswer}>
      {questionElements}
    </div>
  );
};
