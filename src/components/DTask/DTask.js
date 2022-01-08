import React from "react";

const DTask = ({ setTTasks, setDTasks, tTasks, dTasks }) => {
  function handleClick(e) {
    const index = dTasks.indexOf(e.target.offsetParent.textContent);

    switch (e.target.name) {
      case "close-circle":
        if (index > -1) {
          dTasks.splice(index, 1);
        }
        setDTasks([...dTasks]);
        break;
      case "arrow-undo-circle":
        setTTasks([...tTasks, e.target.offsetParent.textContent]);
        if (index > -1) {
          dTasks.splice(index, 1);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="done_tasks">
      <h2>Done Tasks</h2>
      <ul>
        {dTasks.map((task, index) => (
          <li key={index} className="done_task">
            {task}
            <div className="icons">
              <ion-icon name="close-circle" onClick={handleClick}></ion-icon>
              <ion-icon name="arrow-undo-circle" onClick={handleClick}></ion-icon>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DTask;
