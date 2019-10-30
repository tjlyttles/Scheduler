import React, { useEffect, useState } from "react";
import logo from "./jambalogo.png";
import API from "./utils/API";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, addEmployee] = useState("");
  useEffect(() => {
    API.getEmployees()
      .then(res => setEmployees(res.data))
      .catch(err => console.log(err));
  });
  const handleSubmit = e => {
    e.preventDefault();
    
  };
  const handleChange = e => {
    addEmployee(e.target.value);
    console.log(newEmployee);
  };

  const employeesList = employees.map(employee => (
    <tr key={employee._id}>
      <th>{employee.name}</th>
      <td>
        <input className="shiftInput" type="text" />
        -
        <input className="shiftInput" type="text" />
      </td>
      <td>
        <input className="shiftInput" type="text" />
        -
        <input className="shiftInput" type="text" />
      </td>
      <td>
        <input className="shiftInput" type="text" />
        -
        <input className="shiftInput" type="text" />
      </td>
      <td>
        <input className="shiftInput" type="text" />
        -
        <input className="shiftInput" type="text" />
      </td>
      <td>
        <input className="shiftInput" type="text" />
        -
        <input className="shiftInput" type="text" />
      </td>
      <td>
        <input className="shiftInput" type="text" />
        -
        <input className="shiftInput" type="text" />
      </td>
      <td>
        <input className="shiftInput" type="text" />
        -
        <input className="shiftInput" type="text" />
      </td>
    </tr>
  ));

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Employee</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
            <th scope="col">Sunday</th>
            <th scope="col">Total Week Hours</th>
          </tr>
        </thead>
        <tbody>
          {employeesList}
          <tr>
            <th scope="row">Total Day Hours</th>
            <td></td>
          </tr>
        </tbody>
      </table>
      <span>
        Enter New Employee:{" "}
        <input
          placeholder="Employee Name"
          className="small"
          type="text"
          onChange={handleChange}
        />
        <button className="submit btn btn-primary" onSubmit={handleSubmit}>
          Add Employee
        </button>
      </span>
    </div>
  );
};

export default App;
