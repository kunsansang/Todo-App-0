import React from "react";
import { useState } from "react";
import "./DateAndTime.css";
import { useEffect } from "react";

const DateAndTime = () => {
  const d = new Date();
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dates = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [name, setName] = useState(d.getDate());
  const [name1, setName1] = useState(dates[d.getDay() - 1]);
  const [name2, setName2] = useState(month[d.getMonth()]);
  const [name3, setName3] = useState(d.getFullYear());

  const [timeState, setTimeState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimeState(date.toLocaleTimeString());
      setName(d.getDate());
      setName1(dates[d.getDay() - 1]);
      setName2(month[d.getMonth()]);
      setName3(d.getFullYear());
    }, 1000);
  }, []);

  return (
    <div className="date_time">
      <div className="date">
        <div className="date__left">{name}</div>
        <div className="date__right">
          <span>{name1}</span>
          <span>
            {name2} {name3}
          </span>
        </div>
      </div>
      <div className="time">{timeState}</div>
    </div>
  );
};

export default DateAndTime;
