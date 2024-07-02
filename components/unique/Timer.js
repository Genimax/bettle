"use client";
import React, { useState, useEffect } from "react";

const Timer = ({ timestamp }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(timestamp.split(".").reverse().join("-"));
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timestamp]);

  return (
    <div className="container flex flex-wrap justify-center lg:justify-between text-2xl sm:text-3xl md:text-4xl font-bold gap-4 sm:gap-6 md:gap-6">
      {Object.keys(timeLeft).length === 0 ? (
        <div className="flex flex-col items-center">
          <div>0</div>
          <div className="text-base sm:text-lg">TIME IS OUT</div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <div>{timeLeft.days}</div>
            <div className="text-base sm:text-lg">DAYS</div>
          </div>
          <div className="flex flex-col items-center">
            <div>{timeLeft.hours}</div>
            <div className="text-base sm:text-lg">HOURS</div>
          </div>
          <div className="flex flex-col items-center">
            <div>{timeLeft.minutes}</div>
            <div className="text-base sm:text-lg">MINUTES</div>
          </div>
          <div className="flex flex-col items-center">
            <div>{timeLeft.seconds}</div>
            <div className="text-base sm:text-lg">SECONDS</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
