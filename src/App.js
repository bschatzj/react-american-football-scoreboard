//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, newHomeScore] = useState(0);
  let [awayScore, newAwayScore] = useState(0);
  let [minutes, newMinutes] = useState(15);
  let [seconds, newSeconds] = useState(0);
  let [timerOn, setTimerOn] = useState(false);
  let [quarter, newQuarter] = useState(1);

  function startTimer() {

    if (timerOn) {
      if (seconds !== 0) {
        setTimeout(() => newSeconds(seconds - 1),
          300)
          // if (seconds < 10) {
          //   newSeconds(`0  ${seconds - 1}`)
          // }
          if (minutes < 0) {
            newQuarter(quarter + 1);
            newMinutes(minutes = 15)
            newSeconds(seconds=0)
          }
      };
      if (seconds == 0) {
        newMinutes(minutes - 1);
        newSeconds(seconds = 59);
      }
    }
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutes}:{seconds<10?(`0${seconds}`) : seconds }</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{quarter}</div>
        </div>
      </section>
      <section className="buttons">

        <button on onClick={() => setTimerOn(timerOn == !setTimerOn)}>{startTimer()}
          Start </button>




        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => newHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => newHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={() => newHomeScore(homeScore = 0)} className='resetButton'> Home Reset Button</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => newAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => newAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick={() => newAwayScore(awayScore = 0)} className='resetButton'> Away Reset Button</button>
        </div>
      </section>
    </div>
  );
}

export default App;
