import './App.css'
import MeditationTimer from './timer';
import ChangingPhrase from './phrase'
import React from 'react'; 
import ButtonLinks from './sound'

function App() {
  return (
    <React.StrictMode className="program">
        <ChangingPhrase/>
        <MeditationTimer />
        <ButtonLinks />
    </React.StrictMode>
  );
}

export default App;
