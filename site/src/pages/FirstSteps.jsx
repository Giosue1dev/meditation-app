import { useState, useContext } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { nanoid } from "nanoid";

import DataContext from "../context/dataContext";
import { Helmet } from "react-helmet-async";

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

  //function to generate the cards with the questions and the answer is shown by clicking it
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

  //function to show the answer and hide the one of the previous question
  const showAnswer = (e) => {
    let section =
      e.target.tagName === "DIV" ? e.target.id : e.target.parentElement.id;
    //the condition checks that prevOpen is not empty or equal to section and
    //if the user cliks inside the answers body the card doesn't close
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
      <Helmet>
        <title>First Steps - Awaken Mind</title>
      </Helmet>
      {questionElements}
    </div>
  );
};
