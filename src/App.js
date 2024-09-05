import React, { useContext, useEffect } from 'react';
import './App.css';
import { Context } from './ContextApi';
import Question from './Components/Question';
import Option from './Components/Option';
import Count from './Components/Count';
import CountdownTimer from './Components/CountdownTimer';
import Result from './Components/Result';

function App() {
  const { Countdown, setCountdown, count, setcount, Next } = useContext(Context);

  useEffect(() => {
    // Set up a timer when the component mounts
    const timer = setTimeout(() => {
      if (count < 11) {
        setCountdown(true);


      } else {
        setcount(11);
      }
    }, 4000);

    // Cleanup the timer when the component unmounts or count changes
    return () => clearTimeout(timer);
  }, [count, setCountdown, setcount]);

  return (
    <div>
      {Countdown ? (
        <section className="quiz-modal">
          <Question />
          <Option />
          <Count />
        </section>
      ) : count === 11 ? (
        <Result />
      ) : (
        <CountdownTimer />
      )}
    </div>
  );
}

export default App;
