import React, { useContext } from "react";
import styled from "styled-components";
import {} from "react-icons/fc";
import { AppContext } from "../context/GlobalContext";

const Greetings = () => {
  const { publisher, setPublisher } = useContext(AppContext);

  let myDate = new Date();
  let hrs = myDate.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

  return (
    <GreetingsWrapper>
      <div>
        {greet == "Good Evening" ? (
          <img src="/half-moon.png" width={25} height={25} />
        ) : greet == "Good Afternoon" ? (
          <img src="/sun.png" width={25} height={25} />
        ) : (
          <img src="/morning.png" width={25} height={25} />
        )}
        &nbsp;
      </div>
      <div>
        <span>
          {greet},&nbsp;{publisher}
        </span>
      </div>
    </GreetingsWrapper>
  );
};

const GreetingsWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 7px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* background: radial-gradient(circle, #0077ea, #1f4f96, #1b2949, #000); */
  /* color: #fff; */

  div {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }

  div:first-of-type {
    /* For increasing performance 
                       ID/Class should've been used. 
                       For a small demo 
                       it's okaish for now */
    animation: showup 7s infinite;
  }

  div:last-of-type {
    width: 0px;
    animation: reveal 7s infinite;
  }

  div:last-of-type span {
    margin-left: -355px;
    animation: slidein 7s infinite;
  }

  @keyframes showup {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes slidein {
    0% {
      margin-left: -800px;
    }
    20% {
      margin-left: -800px;
    }
    35% {
      margin-left: 0px;
    }
    100% {
      margin-left: 0px;
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 355px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 355px;
    }
  }

  p {
    font-size: 12px;
    color: #999;
    margin-top: 200px;
  }
`;

export default Greetings;
