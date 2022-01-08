import React from "react";
import "./AddBtn.css";

const AddBtn = ({ input, setInput, setTTasks, tTasks, index }) => {
  function handleChange(e) {
    if (e.keyCode === 13 && e.target.value && e.target) {
      setTTasks([e.target.value, ...tTasks]);
      setInput("");
      e.target.nextElementSibling.style.display = "block";
      e.target.nextElementSibling.nextElementSibling.style.display = "none";
    }
  }

  function addTask(e) {
    if (e.target.previousSibling.value) {
      setTTasks([e.target.previousSibling.value, ...tTasks]);
      setInput("");
    }
  }

  function doSomething(e) {
    if (e.target.previousSibling.previousSibling.value) {
      setTTasks([e.target.previousSibling.previousSibling.value, ...tTasks]);
      setInput("");
      e.target.style.display = "none";
      e.target.previousSibling.style.display = "block";
    }
  }

  return (
    <div className="add_task">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleChange}
      />
      <ion-icon name="add-circle" id="addIcon" onClick={addTask}></ion-icon>
      <ion-icon name="checkmark-outline" style={{ display: "none" }} onClick={doSomething}></ion-icon>
    </div>
  );
};

export default AddBtn;
