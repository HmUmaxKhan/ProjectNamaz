"use client"
import { useState, useEffect } from "react";

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, []); 

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="m-4">
      <h3 className="text-center">{`${date.toDateString()} ${date.toLocaleTimeString()}`}</h3>
    </div>
  );
};

export default CurrentDate;
