import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [trainers, setTrainers] = useState([])
  const [workouts, setWorkouts] = useState([])
  const [loadingTrainers, setLoadingTrainers] = useState(true)
  const [loadingWorkouts, setLoadingWorkouts] = useState(true)

  // 1. Fetch API - Fitness Trainers
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const trainerNames = [
          'Arjun Patel',
          'Riya Sharma',
          'Karan Mehta',
          'Neha Shah'
        ]

        const trainerRoles = [
          'Weight Training Coach',
          'Yoga Instructor',
          'Fitness Trainer',
          'Nutrition Coach'
        ]

        const fitnessTeam = data.slice(0, 4).map((user, index) => ({
          id: user.id,
          name: trainerNames[index],
          role: trainerRoles[index],
          email: user.email
        }))

        setTrainers(fitnessTeam)
        setLoadingTrainers(false)
      })
      .catch((error) => {
        console.error('Error with Fetch API:', error)
        setLoadingTrainers(false)
      })
  }, [])

  // 2. Axios - Fitness Products
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products?limit=4')
      .then((response) => {
        setWorkouts(response.data.products)
        setLoadingWorkouts(false)
      })
      .catch((error) => {
        console.error('Error with Axios:', error)
        setLoadingWorkouts(false)
      })
  }, [])

  return (
    <div className="app">

      <h1>Fitness & Gym Dashboard</h1>

      <p className="subtitle">
        Explore Fitness Trainers and Gym Products
      </p>

      {/* Fetch API Section */}
      <section className="api-section">

        <h2>Our Fitness Trainers (Fetched using Fetch API)</h2>

        {loadingTrainers ? (
          <p className="loading">
            Loading fitness trainers...
          </p>
        ) : (
          <div className="card-container">

            {trainers.map((trainer) => (

              <div className="card" key={trainer.id}>

                <h3>{trainer.name}</h3>

                <p>
                  <strong>Specialization:</strong>{' '}
                  {trainer.role}
                </p>

                <p>
                  <strong>Email:</strong>{' '}
                  {trainer.email}
                </p>

              </div>

            ))}

          </div>
        )}

      </section>

      {/* Axios Section */}
      <section className="api-section">

        <h2>Gym Products (Fetched using Axios)</h2>

        {loadingWorkouts ? (
          <p className="loading">
            Loading gym products...
          </p>
        ) : (
          <div className="card-container">

            {workouts.map((item) => (

              <div className="card" key={item.id}>

                <h3>{item.title}</h3>

                <p className="price">
                  ₹{(item.price * 80).toFixed(0)}
                </p>

                <p>
                  <strong>Category:</strong>{' '}
                  {item.category}
                </p>

              </div>

            ))}

          </div>
        )}

      </section>

    </div>
  )
}

export default App