import { useState } from 'react'
import './App.css'

function App() {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    department: '',
    age: '',
  })

  const [employees, setEmployees] = useState([])
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    setEmployee({
      ...employee,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (employee.name.trim() === '') {
      newErrors.name = 'Employee name is required.'
    }

    if (employee.email.trim() === '') {
      newErrors.email = 'Email is required.'
    } else if (!employee.email.includes('@')) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (employee.department === '') {
      newErrors.department = 'Please select a department.'
    }

    if (employee.age === '') {
      newErrors.age = 'Age is required.'
    } else if (employee.age < 18 || employee.age > 60) {
      newErrors.age = 'Age must be between 18 and 60.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validateForm()) {
      const newEmployee = {
        id: Date.now(),
        ...employee,
      }

      setEmployees([...employees, newEmployee])

      setEmployee({
        name: '',
        email: '',
        department: '',
        age: '',
      })

      setErrors({})

      alert('Employee added successfully!')
    }
  }

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((e) => e.id !== id))
  }

  return (
    <div className="app">

      <h1>Employee Management System</h1>

      <div className="form-container">

        <h2>Add Employee</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Employee Name</label>

            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="Enter employee name"
            />

            {errors.name && (
              <p className="error">{errors.name}</p>
            )}
          </div>


          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="Enter employee email"
            />

            {errors.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>


          <div className="form-group">
            <label>Department</label>

            <select
              name="department"
              value={employee.department}
              onChange={handleChange}
            >
              <option value="">Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>

            {errors.department && (
              <p className="error">{errors.department}</p>
            )}
          </div>


          <div className="form-group">
            <label>Age</label>

            <input
              type="number"
              name="age"
              value={employee.age}
              onChange={handleChange}
              placeholder="Enter employee age"
            />

            {errors.age && (
              <p className="error">{errors.age}</p>
            )}
          </div>


          <button type="submit" className="add-button">
            Add Employee
          </button>

        </form>

      </div>


      <div className="student-list">

        <h2>Employee List</h2>

        {employees.length === 0 ? (

          <p className="empty-message">
            No employees added yet.
          </p>

        ) : (

          <div className="table-container">

            <table>

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {employees.map((e) => (

                  <tr key={e.id}>

                    <td>{e.name}</td>

                    <td>{e.email}</td>

                    <td>{e.department}</td>

                    <td>{e.age}</td>

                    <td>
                      <button
                        className="delete-button"
                        onClick={() => deleteEmployee(e.id)}
                      >
                        Delete
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  )
}

export default App