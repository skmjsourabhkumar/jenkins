import React, { useState } from "react";
import "./style.css";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    {
      
      id: 1,
      name: "Ravi Kumar",
      leave: 5,
      salary: "₹30,0000",
      attendance: "Present",
    },
    {
      id: 2,
      name: "Priya Sharma",
      leave: 3,
      salary: "₹35,000",
      attendance: "Absent",
    },
    {
      id: 3,
      name: "Ananya Gupta",
      leave: 8,
      salary: "₹40,000",
      attendance: "Present",
    },
    {
      id: 4,
      name: "Vikram Yadav",
      leave: 4,
      salary: "₹45,000",
      attendance: "Present",
    },
    {
      id: 5,
      name: "Sanya Mehta",
      leave: 2,
      salary: "₹28,000",
      attendance: "Absent",
    },
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    leave: "",
    salary: "",
    attendance: "",
  });

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const addEmployee = () => {
    if (newEmployee.name && newEmployee.leave && newEmployee.salary && newEmployee.attendance) {
      setEmployees([
        ...employees,
        { id: employees.length + 1, ...newEmployee },
      ]);
      setNewEmployee({ name: "", leave: "", salary: "", attendance: "" });
    }
  };

  return (
    <div className="container">
      <h2>Employee Management System</h2>

      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={newEmployee.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="leave"
          placeholder="Leave Days"
          value={newEmployee.leave}
          onChange={handleChange}
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={newEmployee.salary}
          onChange={handleChange}
        />
        <input
          type="text"
          name="attendance"
          placeholder="Attendance (Present/Absent)"
          value={newEmployee.attendance}
          onChange={handleChange}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Leave Days</th>
            <th>Salary</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.leave}</td>
              <td>{emp.salary}</td>
              <td>{emp.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManagement;
