"use client";
import React, { useState, useEffect } from "react";

const Timer = ({ timestamp }) => {
  /**
   * Calculates the time left until the target date specified by the timestamp.
   *
   * @returns {Object} An object containing the time left in days, hours, minutes, and seconds.
   *                   If the target date has passed, returns an object with all fields set to "00".
   */
  const calculateTimeLeft = () => {
    // Convert the timestamp from "dd.mm.yyyy" format to "yyyy-mm-dd" format and create a Date object
    const targetDate = new Date(timestamp.split(".").reverse().join("-"));
    const now = new Date();
    const difference = targetDate - now;

    // If the target date has passed, return an object with all fields set to "00"
    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    // Calculate the time left in days, hours, minutes, and seconds
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(timeLeft).length !== 0) {
      setLoading(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [timestamp]);

  return (
    <div className="container flex flex-wrap justify-center lg:justify-between text-2xl sm:text-3xl md:text-4xl font-bold gap-4 sm:gap-6 md:gap-6">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="flex flex-col items-center">
          <div>{!loading ? timeLeft[unit] : "00"}</div>
          <div className="text-base sm:text-lg">{unit.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
};

export default Timer;
