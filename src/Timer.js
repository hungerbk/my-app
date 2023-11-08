import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    if (time < 0) {
      alert("시간이 종료되었습니다!");
      setTime(10);
      setIsActive(false);
      clearInterval(intervalId);
    }
  }, [time]);

  useEffect(() => {
    if (isActive) {
      const countdown = setInterval(decreaseTime, 1000);
      setIntervalId(countdown);
    } else {
      clearInterval(intervalId);
    }
  }, [isActive]);

  const decreaseTime = () => {
    setTime((prev) => prev - 1);
  };

  const setReset = () => {
    setTime(10);
    setIsActive(false);
    clearInterval(intervalId);
  };

  return (
    <div className="Timer">
      <span>0 :{time}</span>
      <button onClick={() => setIsActive(!isActive)}>{isActive ? "정지" : "시작"}</button>
      <button onClick={setReset}>리셋</button>
    </div>
  );
}

export default Timer;
