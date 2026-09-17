import './App.css'

function MonumentCard({ name, state, builtBy, era }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>State:</strong> {state}</p>
      <p><strong>Built By:</strong> {builtBy}</p>
      <p><strong>Era:</strong> {era}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <h1>Incredible India Heritage</h1>

      <div className="student-container">

        <MonumentCard
          name="Red Fort"
          state="Delhi"
          builtBy="Shah Jahan"
          era="Mughal Empire"
        />

        <MonumentCard
          name="Qutub Minar"
          state="Delhi"
          builtBy="Qutb-ud-din Aibak"
          era="Delhi Sultanate"
        />

        <MonumentCard
          name="Konark Sun Temple"
          state="Odisha"
          builtBy="Narasimhadeva I"
          era="Eastern Ganga Dynasty"
        />

      </div>
    </div>
  )
}

export default App