import { useState, useEffect } from "react";
import "./style.css";

export default function App() {

  // Part 1 (console output)
  useEffect(() => {
    let studentName = "Bernard";
    let courseName = "Frontend Development";
    let year = 2026;

    console.log("Welcome " + studentName + " to the " + courseName + " course.");
  }, []);

  // TAB STATE
  const [activeTab, setActiveTab] = useState("part1");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  // PART 2
  const [heading, setHeading] = useState("Welcome to my website");

  const changeText = () => {
    setHeading("JavaScript is controlling this page!");
  };

  // PART 3
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("You clicked the button!");
  };

  // PART 4 (Calculator)
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);

    let addition = n1 + n2;
    let subtraction = n1 - n2;
    let multiplication = n1 * n2;
    let division = n1 / n2;

    setResult(
      `Addition = ${addition}\nSubtraction = ${subtraction}\nMultiplication = ${multiplication}\nDivision = ${division}`
    );
  };

  // PART 5 (To-Do)
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput === "") return;

    const newTask = {
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="container">

      <h1 className="title">JavaScript Interactive Web Assignment</h1>

      {/* Tabs */}
      <div className="tabs">
        <button className={`tab-btn ${activeTab === "part1" ? "active" : ""}`} onClick={() => openTab("part1")}>Part 1</button>
        <button className={`tab-btn ${activeTab === "part2" ? "active" : ""}`} onClick={() => openTab("part2")}>Part 2</button>
        <button className={`tab-btn ${activeTab === "part3" ? "active" : ""}`} onClick={() => openTab("part3")}>Part 3</button>
        <button className={`tab-btn ${activeTab === "part4" ? "active" : ""}`} onClick={() => openTab("part4")}>Part 4</button>
        <button className={`tab-btn ${activeTab === "part5" ? "active" : ""}`} onClick={() => openTab("part5")}>Part 5</button>
      </div>

      {/* PART 1 */}
      <div className={`tab-content ${activeTab === "part1" ? "active" : ""}`}>
        <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>JavaScript Basics</h2>
        <p>Open the browser console to see the welcome message.</p>
      </div>

      {/* PART 2 */}
      <div className={`tab-content ${activeTab === "part2" ? "active" : ""}`}>
        <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>DOM Manipulation</h2>
        <h3 id="heading" style={{ marginTop: "30px", marginBottom: "30px" }}>{heading}</h3>
        <button className="btn" onClick={changeText}>Change Heading</button>
      </div>

      {/* PART 3 */}
      <div className={`tab-content ${activeTab === "part3" ? "active" : ""}`}>
        <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>Event Handling</h2>
        <button className="btn" onClick={handleClick}>Click Button</button>
        <p>{message}</p>
      </div>

      {/* PART 4 */}
      <div className={`tab-content ${activeTab === "part4" ? "active" : ""}`}>
        <h2>Simple Calculator</h2>

        <input type="number" placeholder="Number 1" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input type="number" placeholder="Number 2" value={num2} onChange={(e) => setNum2(e.target.value)} />

        <button className="btn" onClick={calculate}>Calculate</button>

        <div style={{ whiteSpace: "pre-line" }}>{result}</div>
      </div>

      {/* PART 5 */}
      <div className={`tab-content ${activeTab === "part5" ? "active" : ""}`}>
        <h2>To-Do List</h2>

        <input type="text" placeholder="Enter task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <button className="btn" onClick={addTask}>Add</button>

        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className={task.completed ? "completed" : ""}
              onClick={() => toggleTask(index)}
            >
              {task.text}
              <button onClick={(e) => { e.stopPropagation(); removeTask(index); }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}