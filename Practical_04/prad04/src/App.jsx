import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page">
      <h1>Discover Beautiful Gujarat</h1>

      <p>
        Welcome to the portal for exploring Gujarat's heritage,
        culture, monuments, and beautiful destinations.
      </p>

      <p>
        Use the navigation menu above to explore famous places,
        popular cities, and details about our platform.
      </p>
    </div>
  )
}

function Monuments() {
  const monumentsList = [
    { name: 'Statue of Unity', city: 'Kevadia' },
    { name: 'Rani Ki Vav', city: 'Patan' },
    { name: 'Adalaj Stepwell', city: 'Ahmedabad' },
  ]

  return (
    <div className="page">
      <h1>Famous Places</h1>

      <div className="card-container">
        {monumentsList.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>Location: {item.city}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Regions() {
  return (
    <div className="page">
      <h1>Popular Cities</h1>

      <div className="card-container">

        <div className="card">
          <h3>Ahmedabad</h3>
          <p>
            A vibrant city famous for its heritage, food,
            culture, and modern lifestyle.
          </p>
        </div>

        <div className="card">
          <h3>Vadodara</h3>
          <p>
            A cultural city known for palaces, museums,
            art, and educational institutions.
          </p>
        </div>

        <div className="card">
          <h3>Rajkot</h3>
          <p>
            A lively city known for Gujarati culture,
            historical places, and traditional food.
          </p>
        </div>

      </div>
    </div>
  )
}

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>

      <p>
        This application is built using React and React Router
        for smooth single-page navigation.
      </p>

      <p>
        It provides information about Gujarat's famous places,
        cities, culture, and tourist destinations.
      </p>
    </div>
  )
}

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <nav className="navbar">

          <h2>Gujarat Explorer</h2>

          <div className="nav-links">
            <NavLink to="/">Home</NavLink>

            <NavLink to="/monuments">
              Places
            </NavLink>

            <NavLink to="/regions">
              Cities
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>
          </div>

        </nav>

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/monuments"
              element={<Monuments />}
            />

            <Route
              path="/regions"
              element={<Regions />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>
  )
}

export default App