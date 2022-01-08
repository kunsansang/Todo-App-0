import React from "react";

const TTask = ({ setInput, setTTasks, setDTasks, tTasks, dTasks }) => {
  function handleClick(e) {
    const index = tTasks.indexOf(e.target.offsetParent.textContent);
    switch (e.target.name) {
      case "close-circle":
        if (index > -1) {
          tTasks.splice(index, 1);
        }
        setTTasks([...tTasks]);
        break;
      case "create":
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[1].style.display = "none";
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[2].style.display = "block";
        setInput(e.target.offsetParent.textContent);
        if (index > -1) {
          tTasks.splice(index, 1);
        }
        setTTasks([...tTasks]);
        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[1].childNodes[0].focus();
        break;
      case "checkmark-circle":
        setDTasks([...dTasks, e.target.offsetParent.textContent]);
        if (index > -1) {
          tTasks.splice(index, 1);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="todo_tasks">
      <h2>Todo Tasks</h2>
      <ul>
        {tTasks.map((task, index) => (
          <li key={index} className="todo_task">
            {task}
            <div className="icons">
              <ion-icon name="close-circle" onClick={handleClick}></ion-icon>
              <ion-icon name="create" onClick={handleClick}></ion-icon>
              <ion-icon name="checkmark-circle" onClick={handleClick}></ion-icon>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TTask;
