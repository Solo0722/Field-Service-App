import { Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const MinistryTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [period, setPeriod] = useState(null);

  console.log(hours, minutes, seconds);

  const Timer = () => {
    setSeconds((prev) => prev + 1);

    // if (seconds <= 9) {
    //   seconds = "0" + seconds;
    //   setSeconds();
    // }

    if (seconds > 59) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }

    // if (minutes <= 9) {
    //   minutes = "0" + minutes;
    // }
  };

  const startTimer = () => {
    clearInterval(period);
    let Interval = setInterval(Timer, 100);
    setPeriod(Interval);
  };
  const stopTimer = () => {
    clearInterval(period);
  };

  const resetTimer = () => {
    clearInterval(period);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <MinistryTimerContainer>
      <h2>Ministry Timer</h2>
      <StopClockWrapper>
        <p>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </p>
        <Button.Group>
          <Button onClick={startTimer}>START</Button>
          <Button onClick={stopTimer}>STOP</Button>
          <Button onClick={resetTimer}>RESET</Button>
        </Button.Group>
      </StopClockWrapper>
    </MinistryTimerContainer>
  );
};

const MinistryTimerContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  h2 {
    text-align: center;
    margin-top: 15px;
  }
`;

const StopClockWrapper = styled.div`
  font-family: "Orbitron";
  width: 100%;
  height: 150px;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.2rem;
    font-weight: bolder;
  }

  p > span {
    margin: 5px;
  }

  button {
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    margin: 5px;
  }

  button:hover {
    background: #00bb;
    color: #fff;
  }
`;

export default MinistryTimer;
