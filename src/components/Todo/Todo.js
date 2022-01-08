import React from "react";
import DateAndTime from "../DateAndTime/DateAndTime";
import AddBtn from "../AddTask/AddBtn";
import TTask from "../TTask/TTask";
import DTask from "../DTask/DTask";
import { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tTasks, setTTasks] = useState([]);
  const [dTasks, setDTasks] = useState([]);

  return (
    <div className="todo">
      <DateAndTime />
      <AddBtn input={input} setInput={setInput} tTasks={tTasks} setTTasks={setTTasks} />
      <TTask tTasks={tTasks} setTTasks={setTTasks} dTasks={dTasks} setDTasks={setDTasks} setInput={setInput} />
      <DTask tTasks={tTasks} setTTasks={setTTasks} dTasks={dTasks} setDTasks={setDTasks} />
    </div>
  );
};

export default Todo;
