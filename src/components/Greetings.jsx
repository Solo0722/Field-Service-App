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
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
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

  p {
    font-size: 12px;
    color: #999;
    margin-top: 200px;
  }
`;

export default Greetings;
