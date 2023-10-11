import React, { useState, useEffect } from 'react';

function ChangingPhrase() {
  const phrases = [
    "Here is an explanation of the website. In about 3 minutes, this phrase will disappear, and a series of meditation exercises will appear below. You will find a timer that you can set to your liking, and right after that, there will be buttons that will direct you to YouTube, where relaxing sounds will automatically start to help you relax.",
    "Sit comfortably or lie down in a relaxed position, close your eyes, and start focusing on your breath. Inhale, mentally count to 4. Exhale, mentally count to 4. Continue to breathe evenly, focusing on counting to 4 both in inhalation and exhalation. If your mind starts to wander, gently bring it back to your breath.",
  ]; // Add the phrases you want to change
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the phrase every 3 minutes (180000 milliseconds)
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setIsVisible(true);

      // Hide the phrase after 2.5 minutes (150000 milliseconds)
      setTimeout(() => {
        setIsVisible(false);
      }, 150000);
    }, 180000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className={`changing-phrase ${isVisible ? "visible" : "hidden"}`}>
        <p>{phrases[currentPhraseIndex]}</p>
      </div>
    </div>
  );
}

export default ChangingPhrase;