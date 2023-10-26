import { createContext } from "react";
import { NavLink } from "react-router-dom";

import {
  FaFire,
  FaWater,
  FaCloudRain,
  FaDroplet,
  FaDove,
  FaBell,
  FaClock,
  FaMusic,
} from "react-icons/fa6";

import Fire from "../assets/sounds/fireplace-crackling.mp3";
import OceanWaves from "../assets/sounds/ocean-waves.mp3";
import Rain from "../assets/sounds/rain.mp3";
import Waterfall from "../assets/sounds/waterfall.mp3";
import BirdsSinging from "../assets/sounds/birds-singing.mp3";
import TibetanBell from "../assets/sounds/tibetan-bowl.mp3";
import ClockTicking from "../assets/sounds/clock.mp3";
import MeditationMusic from "../assets/sounds/meditation-music.mp3";
import breathMeditation from "../assets/guided-meditations/breath-meditation.mp3";
import sleepMeditation from "../assets/guided-meditations/sleep-meditation.mp3";
import gratitudeMeditation from "../assets/guided-meditations/gratitude-meditation.mp3";

const DataContext = createContext("");

export const DataProvider = ({ children }) => {
  const navLinksPresets = {
    customMed: (
      <>
        <NavLink
          to="/guided-meditations"
          className="mobile-menu lg:desktop-menu"
        >
          Guided Meditations
        </NavLink>
        <NavLink to="/first-steps" className="mobile-menu lg:desktop-menu">
          First Steps
        </NavLink>
      </>
    ),
    guidedMed: (
      <>
        <NavLink
          to="/custom-meditations"
          className="mobile-menu lg:desktop-menu "
        >
          Custom Meditations
        </NavLink>
        <NavLink to="/first-steps" className="mobile-menu lg:desktop-menu ">
          First Steps
        </NavLink>
      </>
    ),
    firstSteps: (
      <>
        <NavLink
          to="/custom-meditations"
          className="mobile-menu lg:desktop-menu "
        >
          Custom Meditations
        </NavLink>
        <NavLink
          to="/guided-meditations"
          className="mobile-menu lg:desktop-menu "
        >
          Guided Meditations
        </NavLink>
      </>
    ),
  };

  const timePresets = [
    { id: "5 minutes", value: 300 },
    { id: "10 minutes", value: 600 },
    { id: "15 minutes", value: 900 },
  ];

  const soundtracks = [
    {
      id: "Fireplace",
      src: Fire,
      icon: <FaFire className="text-2xl md:text-3xl" />,
    },
    {
      id: "Waves",
      src: OceanWaves,
      icon: <FaWater className="text-2xl md:text-3xl" />,
    },
    {
      id: "Rain",
      src: Rain,
      icon: <FaCloudRain className="text-2xl md:text-3xl" />,
    },
    {
      id: "Waterfall",
      src: Waterfall,
      icon: <FaDroplet className="text-2xl md:text-3xl" />,
    },
    {
      id: "Birds Singing",
      src: BirdsSinging,
      icon: <FaDove className="text-2xl md:text-3xl" />,
    },
    {
      id: "Tibetan Bell",
      src: TibetanBell,
      icon: <FaBell className="text-2xl md:text-3xl" />,
    },
    {
      id: "Clock Ticking",
      src: ClockTicking,
      icon: <FaClock className="text-2xl md:text-3xl" />,
    },
    {
      id: "Meditation Music",
      src: MeditationMusic,
      icon: <FaMusic className="text-2xl md:text-3xl" />,
    },
  ];

  const meditations = [
    {
      title: "Breath Awareness Meditation",
      duration: 600,
      src: breathMeditation,
    },
    {
      title: "Sleep Meditation",
      duration: 600,
      src: sleepMeditation,
    },
    {
      title: "Gratitude Meditation",
      duration: 600,
      src: gratitudeMeditation,
    },
  ];

  const questions = [
    {
      id: "whatIs",
      title: "What is meditation?",
      answerIntro: `Meditation is a mental and spiritual practice used to train the mind, achieve mental clarity and inner peace. 
        It has been practiced for thousands of years in many cultures, nowadays is often used as a tool for personal growth. 
        It is not tied to any religion and there are many meditation techniques.`,
    },
    {
      id: "benefits",
      title: "Which are the benefits of meditating?",
      answerIntro: `The benefits of meditation may vary from one to another, but here are some common benefits provided by it: `,
      bulletList: [
        "stress reduction",
        "improved focus and concentration",
        "increased self-awareness",
        "sense of inner peace",
        "better sleep",
      ],
      answerOutro:
        "It's benefits may not be immediate, it's important to be consistent with it to reach significant results.",
    },
    {
      id: "gettingStarted",
      title: "How to get started with meditation?",
      answerIntro: `Getting started is actually pretty easy, here's the steps to start your meditation journey: `,
      bulletList: [
        "Choose a comfortable and quiet place.",
        "sit or lie down in a comfortable position, for example sit on a chair with your back straight or if u prefer you can lie in your bed but be careful to not fall asleeep.",
        " Set a timer for your desired meditation duration, 5/10 minutes is a suggested duration for beginners.",
        "Focus on your breath and its natural rhythm, you can focus on the sensation at your nostrils, chest or belly.",
        "Be mindful of your thoughts or sensations, acknowledge them and the fact that you got distracted then kindly return your focus to your breath.",
      ],
    },
    {
      id: "types",
      relatedState: "types",
      title: "Which are the different types of meditation?",
      answerIntro: `There are many type and techniques of meditation here we'll go through some of them: `,
      bulletList: [
        "Mindfulness: focuses on cultivating present-moment awareness without judgement, by observing thoughts, emotions and sensations and let them pass without attachment.",
        "Body scan: Involves scanning and paying attention to the different parts of your body, starting from the head and moving down to the toes or viceversa.",
        "Breath awareness: The focus is on the breath, observing its natural rhythm. It Helps anchor in the present moment bringing relaxation.",
        "Guided: Involves following the instructions of a meditation teacher or recorded audio guiding through a specific meditation practice. It's helpful for beginners.",
        "Mantra: Involves repeating a specific word, phrase or sound, audibly or in your mind. The repetition helps calm the mind and enhance concentration.",
        "Walking: Involves slow, mindful walking while maintaining awareness of each step and breath.",
      ],
      answerOutro:
        "Those are just some examples, try different techniques and find the one that suits you!",
    },
    {
      id: "wanderingMind",
      title: "What should i do if my mind wanders during meditation?",
      answerIntro: `It's normal for the mind to wander especially when you are starting out so don't get frustrated by it. Here are some steps to deal with it :`,
      bulletList: [
        "Gently redirect your attention: acknowledge the distraction with kindness and take your focus back to your chosen concentration point.",
        "Label your thoughts: As thoughts arise, label them without judgement and bring your concentration back to your chosen object.",
        "Mindfulness : instead of pushing away distractions try being aware of them, notice them and then gently return to your focus object.",
        "Breath deeply: if your mind keeps wandering take a few deep breaths, paying attention to each breath and the sensations it brings. this helps calm your mind and bring attention to the present moment.",
      ],
      answerOutro:
        "Remember that meditation is about changing your relation with your thoughts not eliminating them. ",
    },
  ];

  return (
    <DataContext.Provider
      value={{
        navLinksPresets,
        timePresets,
        soundtracks,
        meditations,
        questions,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
